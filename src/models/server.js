const express = require('express');
const { join } = require('path');
const cors = require('cors');
const { corsOptions } = require('../config/cors-options');
const { swaggerDocs } = require('../routes/swagger.routes');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.path = {
            public: '/',
            filesData: '/files/data',
            swagger: '/docs'
        }
        this.setMiddlewares();
        this.setRoutes();
    }
    setMiddlewares() {
        this.app.use(cors(corsOptions));
        this.app.use(express.static(join(__dirname, '../../public/')));
        this.app.use(express.json());
    }
    setRoutes() {
        this.app.use(this.path.filesData, require('../routes/filesData.routes'));
        swaggerDocs(this.app, this.path.swagger, this.port);
        this.app.use(this.path.public, require('../routes/public.routes'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server is running on port', this.port)
        })
    }
}
module.exports = {
    Server
}