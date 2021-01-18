const usersRouter = require('express').Router();
const controllers = require('../controllers/users');

usersRouter.get('/users', controllers.getUsers);

usersRouter.get('/users/:id', controllers.getUser);

module.exports = usersRouter;
