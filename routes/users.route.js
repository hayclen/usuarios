const { Router } = require('express');
const usersController = require('../controllers/users.controller')

const usersRoute = Router();

usersRoute.get('/', usersController.getUsers);
usersRoute.post('/', usersController.createUser);
usersRoute.delete('/:id', usersController.deleteUser);
usersRoute.delete('/destroy/:id', usersController.destroyUser);
usersRoute.put('/:id', usersController.updateUser);
module.exports = usersRoute;