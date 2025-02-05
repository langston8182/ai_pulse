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
    return await Newsletter.findOneAndDelete({ email: email });
}

/**
 * Unsubscribe a newsletter by email and token.
 */
async function unsubscribeNewsletter(email, token) {
    return await Newsletter.findOneAndDelete({ email: email, token: token });
}

module.exports = {
    createNewsletter,
    getAllNewsletter,
    deleteNewsletter
};
