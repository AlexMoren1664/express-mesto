const cardsRouter = require('express').Router();
const controllers = require('../controllers/cards');

cardsRouter.get('/cards', controllers.getCards);
cardsRouter.post('/cards', controllers.createCard);
cardsRouter.delete('/cards/:cardId', controllers.deleteCard);
cardsRouter.put('/cards/:cardId/likes', controllers.likeCard);
cardsRouter.delete('/cards/:cardId/likes', controllers.dislikeCard);

module.exports = cardsRouter;
