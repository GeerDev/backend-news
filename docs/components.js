module.exports = {
    components:{
        schemas:{
            oneNewsSchema:{
                    type:'object',
                    properties:{
                        _id:{
                            type:'ObjectId',
                            description:"Unique identifier of the news stored in the database",
                            example:"6368371c5a4d70807ae8ddc6"
                        },
                        title:{
                            type:'String',
                            description:"Title of the article",
                            example:"Bitcoin Price Analysis: Rangebound Technicals - 16 November 2022"
                        },
                        link:{
                            type:"String",
                            description:"The direct URL to the article",
                            example:"https://cryptodaily.co.uk/2022/11/bitcoin-price-analysis-rangebound-technicals-16-november-2022"
                        },
                        source_id:{
                            type:'String',
                            description:"The name of the source this article came from",
                            example:"cryptodaily"
                        },
                        keywords:{
                            type:'Array',
                            description:"The list of keywords related to the article",
                            example: ["Testing", "Jest", "Hello"]
                        },
                        author:{
                            type:"Array",
                            description:"The author(s) of the news article",
                            example: ["Ger"]
                        },
                        image_url:{
                            type:"String",
                            description:"Relevant image url for the news article",
                            example:"http://cryptodailycdn.ams3.cdn.digitaloceanspaces.com/btcusd-15-november-2022-240-1.jpg"
                        },
                        video_url:{
                            type:"String",
                            description:"Relevant video url for the news article",
                            example:"http://cryptodailycdn.ams3.cdn.digitaloceanspaces.com/btcusd-15-november-2022-240-1.mp4"
                        },
                        description:{
                            type:"String",
                            description:"A description of the news article",
                            example:"Firms offering consumers the ability to self-custody their crypto, like Ledger and Trezor, have seen an uptick in sales after FTX went bust"
                        },
                        date:{
                            type:"String",
                            description:"The article publish date and time in UTC",
                            example:"2022-11-15 16:11:27"
                        },
                        content:{
                            type:"String",
                            description:"A Full Content if available of the news article",
                            example:"Decentralized exchanges (DEXs) are not the only businesses doing well after the seismic collapse of crypto exchange FTX last week. Hardware wallet manufacturers Ledger and Trezor both reported a huge spike in sales last week as consumer..."
                        },
                        country:{
                            type:"Array",
                            description:"The list of countries related to the news article",
                            example:["united states of america"]
                        },
                        category:{
                            type:"Array",
                            description:"The list of categories of the news article",
                            example:["top"]
                        },
                        language:{
                            type:"String",
                            description:"The language in which news article has been created",
                            example:"english"
                        },
                        archived:{
                            type:"Boolean",
                            description:"Status of the news item archived or not",
                            example: true
                        },
                        archiveDate:{
                            type:"Date",
                            description:"Date the news was archived",
                            example:"2022-11-06T22:37:16.571Z"
                        },
                        createdAt:{
                            type:"Date",
                            description:"Creation date",
                            example:"2022-11-06T22:37:16.571Z"
                        },
                        updatedAt:{
                            type:"Date",
                            description:"Update date",
                            example:"2022-11-06T22:37:16.571Z"
                        },
                        __v:{
                            type:"Number",
                            description:"Set property of the document when it is first created",
                            example: 0
                        }
                }           
            },
            NewsSchema:{
                type:'array',
                items:{
                    $ref: '#/components/schemas/oneNewsSchema'
                }        
            },
            NewsInput: {
                type: 'object',
                properties: {
                    title:{
                        type:'String',
                        description:"Title of the article",
                        example:"Bitcoin Price Analysis: Rangebound Technicals - 16 November 2022"
                    },
                    link:{
                        type:"String",
                        description:"The direct URL to the article",
                        example:"https://cryptodaily.co.uk/2022/11/bitcoin-price-analysis-rangebound-technicals-16-november-2022"
                    },
                    source_id:{
                        type:'String',
                        description:"The name of the source this article came from",
                        example:"cryptodaily"
                    },
                    keywords:{
                        type:'Array',
                        description:"The list of keywords related to the article",
                        example: ["Testing", "Jest", "Hello"]
                    },
                    author:{
                        type:"Array",
                        description:"The author(s) of the news article",
                        example: ["Ger"]
                    },
                    image_url:{
                        type:"String",
                        description:"Relevant image url for the news article",
                        example:"http://cryptodailycdn.ams3.cdn.digitaloceanspaces.com/btcusd-15-november-2022-240-1.jpg"
                    },
                    description:{
                        type:"String",
                        description:"A description of the news article",
                        example:"Firms offering consumers the ability to self-custody their crypto, like Ledger and Trezor, have seen an uptick in sales after FTX went bust"
                    },
                    date:{
                        type:"String",
                        description:"The article publish date and time in UTC",
                        example:"2022-11-15 16:11:27"
                    },
                    content:{
                        type:"String",
                        description:"A Full Content if available of the news article",
                        example:"Decentralized exchanges (DEXs) are not the only businesses doing well after the seismic collapse of crypto exchange FTX last week. Hardware wallet manufacturers Ledger and Trezor both reported a huge spike in sales last week as consumer..."
                    },
                    category:{
                        type:"Array",
                        description:"The list of categories of the news article",
                        example:["top"]
                    },
                }
            }
        }
    }    
}