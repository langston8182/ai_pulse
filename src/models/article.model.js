const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: String,
    summary: String,
    content: String,
    imageUrl: String,
    category: String,
    publishedAt: String,
    author: String
});

module.exports = mongoose.model('Article', articleSchema);
