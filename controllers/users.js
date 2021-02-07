const mongoose = require('mongoose');
const User = require('../models/user');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send(err.users);
    });
};
const getUser = (req, res) => {
  User.findById(req.params.id)
    .orFail(() => {
      throw new Error('404');
    })
    .then((users) => res.send({ data: users }))
    .catch((err) => {
      if (err.message === '404') {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      if (err instanceof mongoose.CastError) {
        return res.status(400).send({ message: 'Запрос не был обработан, неверные данные' });
      }
      return res.status(500).send({ message: 'Ошибка на сервере' });
    });
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: 'Переданы некорректные данные запроса' });
      }
      return res.status(500).send({ message: 'Ошибка на сервере' });
    });
};

const updateUserProfile = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about }, {
    new: true,
    runValidators: true,
    upsert: true,
  })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: 'Переданы некорректные данные запроса' });
      }
      return res.status(500).send({ message: 'Ошибка на сервере' });
    });
};

const updateUserAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, {
    new: true,
    runValidators: true,
    upsert: true,
  })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: 'Переданы некорректные данные запроса' });
      }
      return res.status(500).send({ message: 'Ошибка на сервере' });
    });
};
module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUserProfile,
  updateUserAvatar,
};
