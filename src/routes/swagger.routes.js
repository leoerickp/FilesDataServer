const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: ' Files - Data API',
            version: '1.0.0',
            description: 'Files - Data API manage data for .... This is an example created for this project. It was written using [https://editor.swagger.io/](https://editor.swagger.io/) as editor and **swagger-jsdoc** and **swagger-ui-express** component'
        }
    },
    apis: ['src/routes/*.routes.js']
}

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, path, port) => {
    app.use(path, swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    app.get(`${path}.json`, (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
    console.log(`Version 1 Docs available on http://localhost:${port}/docs`)
}

module.exports = { swaggerDocs }