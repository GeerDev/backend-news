const mongoose = require('mongoose');

const NewSchema = new mongoose.Schema({
    title: {
        type: String
    },
    link: {
        type: String
    },
    source_id: {
        type: String
    },
    keywords: {
        type: Array
    },
    creator: {
        type: Array
    },
    image_url: {
        type: String
    },
    video_url: {
        type: String
    },
    description: {
        type: String
    },
    pubDate: {
        type: String
    },
    content: {
        type: String
    },
    country: {
        type: Array
    },
    category: {
        type: Array
    },
    language: {
        type: String
    },
    archived: {
        type: Boolean
    }
}, { timestamps: true });

const New = mongoose.model('New', NewSchema);

module.exports = New;