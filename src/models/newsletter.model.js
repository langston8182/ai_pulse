const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
    email: String,
    token: String
});

module.exports = mongoose.model('Newsletter', newsletterSchema);
