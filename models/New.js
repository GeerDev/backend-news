const mongoose = require('mongoose');

const NewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter a title"]
    },
    link: {
        type: String,
        default: ""
    },
    source_id: {
        type: String,
        default: "own source"
    },
    keywords: {
        type: Array
    },
    creator: {
        type: Array
    },
    image_url: {
        type: String,
        required: [true, "Please enter an image"]
    },
    video_url: {
        type: String,
        default: null
    },
    description: {
        type: String,
        required: [true, "Please enter a description"]
    },
    pubDate: {
        type: String
    },
    content: {
        type: String,
        required: [true, "Please enter a minimum content"]
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