const {
    createNewsletter,
    getAllNewsletter,
    deleteNewsletter
} = require('../services/newsletter.service');

/**
 * Contrôleur pour router la requête selon la méthode et le chemin.
 */
async function newsletterController(httpMethod, path, body) {
    if (httpMethod === 'GET' && path === '/newsletter') {
        const newsletters = await getAllNewsletter();
        return { statusCode: 200, body: JSON.stringify(newsletters) };
    }

    if (httpMethod === 'POST' && path === '/newsletter') {
        const created = await createNewsletter(body);
        return { statusCode: 201, body: JSON.stringify(created) };
    }

    if (httpMethod === 'DELETE' && path.startsWith('/newsletter/')) {
        const email = path.split('/').pop();
        const deleted = await deleteNewsletter(email);
        if (!deleted) {
            return { statusCode: 404, body: JSON.stringify({ message: 'Not found' }) };
        }
        return { statusCode: 200, body: JSON.stringify({ message: 'Deleted' }) };
    }

    // Route par défaut
    return { statusCode: 404, body: JSON.stringify({ message: 'Not found' }) };
}

module.exports = {
    newsletterController
};
