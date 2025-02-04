const { connectToDatabase } = require('./db');
const { articleController } = require('./controllers/article.controller');

exports.handler = async (event) => {
    console.log('Incoming event:', JSON.stringify(event, null, 2));

    // 1. Connexion MongoDB
    await connectToDatabase(process.env.MONGODB_URI);

    // 2. Extraire les infos de la requête
    const httpMethod = event.requestContext.httpMethod;
    const path = event.requestContext.http.path;

    let body;
    try {
        body = event.body ? JSON.parse(event.body) : {};
    } catch (err) {
        body = {};
    }

    // 3. Appeler le contrôleur
    const result = await articleController(httpMethod, path, body);

    // 4. Retourner la réponse
    return {
        ...result,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    };
};
