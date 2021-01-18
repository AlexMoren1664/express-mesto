const path = require('path');
const readJson = require('../utils/readJson');

const getUsers = (req, res) => {
  readJson(path.join(__dirname, '..', 'data', 'users.json'))
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
const getUser = (req, res) => {
  const { id } = req.params;

  readJson(path.join(__dirname, '..', 'data', 'users.json'))
    .then((users) => {
      const user = users.find((userId) => userId._id === id);
      if (!user) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  getUsers,
  getUser,
};
