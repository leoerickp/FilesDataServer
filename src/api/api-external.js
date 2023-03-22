const { default: axios } = require("axios");

const ExternalAPI = axios.create({
    baseURL: process.env.URI_EXTERNAL_API_BASE,
    headers: {
        'Authorization': `Bearer ${process.env.TOKEN_EXTERNAL_API}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Credentials': true
    }
});

module.exports = { ExternalAPI }