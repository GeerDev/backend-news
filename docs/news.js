module.exports = {
    paths: {
      "/news":{
        get: {
            tags: {
              Endpoint: " : Get all news",
            },
            description: "Gets all the news from the database",
            operationId: "getAll",
            responses: {
              200: {
                description: "There you have all the news",
                content: {
                    "application/json": {
                      schema: {
                        $ref: "#/components/schemas/NewsSchema",
                      }
                    }
                  }
              },
              500: {
                  description: "There was a problem getting all news",
              }
            }
          },
        post: {
            tags: {
              Endpoint: " : Create new",
            },
            description: "Create a new news item",
            operationId: "create",
            parameters: [],
            requestBody: {
                content: {
                    "multipart/form-data": {
                        schema: {
                            $ref: "#/components/schemas/NewsInput"
                        },
                        encoding: {
                            image_url: {
                                contentType: ["image/png", "image/jpg", "image/gif"]
                            },
                        }
                    },
              },
            },
            responses: {
              201: { description: "A new news item has been created" },
              400: { description: "Please enter a title | description | minimum content | image" },
              500: { description: "There was a problem in the creation of the news item" }
            },
          },
      },   
      "/news/id/{id}":{
        put: {
            tags: {
                Endpoint: " : Update new",
            },
            description: "Updates a news item by Id and changes its archived property and gives it a date",
            operationId: "updateArchived",
            parameters: [{
                name: "id",
                in: "path",
                schema: {
                    _id: {
                        type: 'objectId',
                        description: "An id of a news",
                        example: "6201064b0028de7866e2b2c4"
                    },
                },
                description: "Id of news to be updated",
            }],
            responses: {
              200: { description: "News with title x has been updated" },
              400: { description: "Please enter a valid news ID" },
              500: { description: "There was a problem updating the news item" },
            },
          },
        delete: {
            tags: {
                Endpoint: " : Delete new",
            },
            description: "Delete new by Id",
            operationId: "delete",
            parameters: [{
                name: "id",
                in: "path",
                schema: {
                    _id: {
                        type: 'objectId',
                        description: "An id of a news",
                        example: "6201064b0028de7866e2b2c4"
                    },
                },
                description: "Id of news to be updated",
            }],
            responses: {
              200: { description: "News with title x has been deleted" },
              400: { description: "Please enter a valid news ID" },
              500: { description: "There was a problem in deleting the news item" },
            },
          },
        },  
      },
    }