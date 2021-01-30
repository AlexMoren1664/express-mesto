const usersRouter = require('express').Router();
const controllers = require('../controllers/users');

usersRouter.get('/users', controllers.getUsers);
usersRouter.get('/users/:id', controllers.getUser);
usersRouter.post('/users', controllers.createUser);
usersRouter.patch('/users/me', controllers.updateUserProfile);
usersRouter.patch('/users/me/avatar', controllers.updateUserAvatar);

module.exports = usersRouter;
