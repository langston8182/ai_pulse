const Newsletter = require('../models/newsletter.model');

/**
 * Create a new newsletter email.
 */
async function createNewsletter(newsletterData) {
    const newsletter = new Newsletter(newsletterData);
    return await newsletter.save();
}

/**
 * Get all newsletter email.
 */
async function getAllNewsletter() {
    return await Newsletter.find({});
}
/**
 * Delete a newsletter by email.
 */
async function deleteNewsletter(email) {
    return await Article.findOneAndDelete({ email: email });
}

module.exports = {
    createNewsletter,
    getAllNewsletter,
    deleteNewsletter
};
