const {
    getParameters,
    updateParameters
} = require('../services/parameters.service');

async function parametersController(httpMethod, path, body) {
    if (httpMethod === 'GET' && path === '/parameters') {
        const parameters = await getParameters();
        return {statusCode: 200, body: JSON.stringify(parameters)};
    }

    if (httpMethod === 'PUT' && path === '/parameters') {
        const {parameters} = JSON.parse(body || "{}");

        if (!Array.isArray(parameters)) {
            return {
                statusCode: 400,
                body: JSON.stringify({message: "Le payload doit contenir une liste 'parameters'."})
            };
        }

        const updateResults = await updateParameters(parameters);
        return {statusCode: 200, body: JSON.stringify(updateResults)};
    }

    // Route par défaut pour les requêtes non prises en charge
    return {statusCode: 404, body: JSON.stringify({message: 'Route non trouvée'})};
}

module.exports = {
    parametersController
};