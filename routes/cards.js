const cardsRouter = require('express').Router();
const controllers = require('../controllers/cards');

cardsRouter.get('/cards', controllers.getCards);

module.exports = cardsRouter;
