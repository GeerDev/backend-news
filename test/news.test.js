const request = require ("supertest");
const app = require("../index");
const { dbConnection } = require("../database/config");
const New = require("../models/New");

describe("testing/news", () => {

    beforeAll(async() => {
        process.env.NODE_ENV = 'test' 
        await dbConnection()
    });

    // afterAll(async() => await New.deleteMany())

    const news = {
      title: "Title to be tested",
      link: "www.testexample.com",
      source_id: "my testing source",
      keywords: ["Testing", "Jest", "Hello"],
      author: ["Ger"],
      image_url: "https://assets3.cbsnewsstatic.com/hub/gettyimages-1240132487.jpg",
      description: "Is a description",
      date: "2022-11-15 04:48:51",
      content: "Is a description", 
      country: ["unites state of america"],
      category: ["Testing1", "Testing2"],
      language: "english",
      archived: false
    };
   
    test("Create a news", async () => {
      const res = await request(app)
        .post("/news")
        .send(news)
        .expect(201)
        expect(res.body.newNews._id).toBeDefined();
        expect(res.body.newNews.createdAt).toBeDefined();
        expect(res.body.newNews.updatedAt).toBeDefined();
        expect(res.body.newNews.__v).toBeDefined();
           
      const sendNews = {
            ...news,
            _id: res.body.newNews._id,
            video_url: null,
            archiveDate: null,
            __v: res.body.newNews.__v,
            createdAt: res.body.newNews.createdAt,
            updatedAt: res.body.newNews.updatedAt,
          };

          const newNews = res.body.newNews;
          expect(newNews).toEqual(sendNews);          
    });

    test("Get all the news", async () => {
        const res = await request(app)
        .get("/news")
        .expect(200)
        console.warn(res.body)
    });

    test("Get a news item by id", async () => {
    
    });

    test("Show categories", async () => {
    
    });

    test("Get news by category", async () => {
    
    });

    test("Search for a news item", async () => {
    
    });

    test("Update archived property and archiver date", async () => {
    
    });

    test("Delete a news item", async () => {
    
    });

    // test("Fill database with news", async () => {
    //     const res = await request(app)
    //     .get("/news/fillDatabase/1")
    //     .expect(201)
    //     expect(res.text).toContain("The news database has been created");
    //     expect(res.statusCode).toBe(201);
    // });

  });