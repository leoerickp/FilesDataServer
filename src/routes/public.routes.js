const { Router } = require('express');
const { PublicController } = require('../controllers/public.controller');

const publicController = new PublicController();

const publicRoutes = Router();
publicRoutes.get('/*', publicController.sendErrorPage);

module.exports = publicRoutes;