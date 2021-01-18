const path = require('path');
const readJson = require('../utils/readJson');

const getCards = (req, res) => {
  readJson(path.join(__dirname, '..', 'data', 'cards.json'))
    .then((cards) => {
      res.send(cards);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  getCards,
};
