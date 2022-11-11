const New = require("../models/New.js");
const axios = require("axios");

const NewController = {
  async fillDatabase(req, res) {
    try {
        await New.deleteMany()
        let data = []
        let numberNews = 0
        for(numPages = 0; numPages < req.params.pages; numPages++){
            const response = await axios(`https://newsdata.io/api/1/news?apikey=pub_1337343c60f55622c60aae270dadb25ef7c7a&country=es&page=${numPages}`)
            const { results } = response.data
            data = [...data, results].flat()
        }
        data.forEach(async element => {
            if (element.description && element.image_url){
                numberNews++
                await New.create({...element, archived: false})
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
        const news = await New.find()
        res.status(200).send({info:"There you have all the news", news})
    } catch (error) {
        console.error(error);
        res.status(500).send("There was a problem getting all news")
    }
  },
  async getById(req, res) {
    try {
        const oneNews = await New.findById(req.params.id);
        res.status(200).send({info:`Here is your news with id ${req.params.id}`, oneNews})
    } catch (error) {
        console.error(error);
        res.status(500).send("There was a problem getting the news by id")
    }
  },
  async create(req, res) {
    try {

    } catch (error) {
 
    }
  },
  async updateArchived(req, res) {
    try {

    } catch (error) {
 
    }
  },
  async delete(req, res) {
    try {

    } catch (error) {
 
    }
  }
};

module.exports = NewController;