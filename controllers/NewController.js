const New = require("../models/New.js");
const axios = require("axios");
const fs = require('fs');

const NewController = {
  async fillDatabase(req, res) {
    try {
        await New.deleteMany()
        let data = []
        let numberNews = 0
        for(numPages = 0; numPages < req.params.pages; numPages++){
            const response = await axios(`https://newsdata.io/api/1/news?apikey=pub_1337343c60f55622c60aae270dadb25ef7c7a&country=us&page=${numPages}`)
            const { results } = response.data
            data = [...data, results].flat()
        }
        data.forEach(async element => {
          const { description, image_url, content, pubDate:date, creator:author } = element
            if (description && image_url && content){
                numberNews++
                await New.create({...element, date, author, archived: false})
            }
        });
        res.status(201).send(`The news database has been created with ${numberNews} news`)
    } catch (error) {
        console.error(error);
        res.status(500).send("There was a problem creating the news collection")
    }
  },
  async getAll(req, res) {
    try {
        const news = await New.find().sort({ updatedAt: -1 })
        res.status(200).send({info:"There you have all the news", news})
    } catch (error) {
        console.error(error);
        res.status(500).send("There was a problem getting all news")
    }
  },
  async getById(req, res) {
    try {
        const oneNews = await New.findById(req.params.id);
        if(oneNews){
          res.status(200).send({info:`Here is your news with id ${req.params.id}`, oneNews})
        } else {
          res.status(400).send("Please enter a valid news ID")
        } 
    } catch (error) {
        res.status(500).send("There was a problem getting the news by id")
    }
  },
  async create(req, res, next) {
    try {
      if(req.file) req.body.image_url = process.env.LOCAL_OR_DEPLOY + req.file?.filename
      const newNews = await New.create({ ...req.body, country:["unites state of america"], language:"english", archived: false});
      res.status(201).send({info:"A new news item has been created", newNews})
    } catch (error) {
      if (req.file) fs.unlinkSync(req.file?.destination + "/" + req.file?.filename)
      next(error);
    }
  },
  async updateArchived(req, res) {
    try {
      const found = await New.findById(req.params.id);
      if(found) {
        const updateNews = await New.findByIdAndUpdate(req.params.id, { archived: true, archiveDate: new Date() }, { new: true })
        res.status(200).send({info: `News with title ${updateNews.title} has been updated`, updateNews})
      } else {
        res.status(400).send("Please enter a valid news ID")
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("There was a problem updating the news item")
    }
  },
  async delete(req, res) {
    try {
      const found = await New.findById(req.params.id);
      if(found) {
      if(found.source_id === "own source") fs.unlinkSync(`./public/news_images/${found.image_url.slice(found.image_url.lastIndexOf("/"), found.length)}`)
      const deleteNews = await New.findByIdAndDelete(req.params.id)
      res.status(200).send({info: `News with title ${deleteNews.title} has been deleted`, deleteNews})
    } else {
      res.status(400).send("Please enter a valid news ID")
    }
    } catch (error) {
      console.error(error);
      res.status(500).send("There was a problem in deleting the news item")
    }
  },
  async showCategories(req, res) {
    try {
      const categories = await New.distinct("category")
      res.status(200).send({info: "The following categories are available", categories})
    } catch (error) {
      console.error(error);
      res.status(500).send("There was a problem getting the available categories")
    }
  },
  async findNewsByCategory(req, res) {
    try {
      if(req.params.category === "allcategories"){
        const newsByCategories = await New.find().sort({ updatedAt: -1 })
        return res.status(200).send({info: "Here you have the news of all categories.", newsByCategories})
      }
      const newsByCategories = await New.find({ category: req.params.category }).sort({ updatedAt: -1 })
      res.status(200).send({info: `Here you have the news of the category ${req.params.category}`, newsByCategories})
    } catch (error) {
      console.error(error);
      res.status(500).send("There was a problem in getting the news by category")
    }
  },
  async searchByTitle(req, res) {
    try {
      let resultNews
      let { title: titleQuery = "", category = "allcategories"} = req.query
      const title = new RegExp(`${titleQuery}`, 'i')
      category === "allcategories" ? resultNews = await New.aggregate([{ $match: { title }}]) : resultNews = await New.aggregate([{ $match: { $and:[{ title }, { category } ] }}])
      res.status(200).send({info: "These are the results of your search", resultNews})
    } catch (error) {
      console.error(error);
      res.status(500).send("There was a problem when doing the search")
    }
  }
};

module.exports = NewController;