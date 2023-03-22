const { request, response } = require("express");
const { join } = require('path');

const publicPath = join(__dirname, '../../public/')
class PublicController {
    sendErrorPage(req = request, res = response) {
        res.sendFile(publicPath + 'Error404.html');
    }
}
module.exports = {
    PublicController
}