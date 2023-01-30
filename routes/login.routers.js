const { Router } = require('express');
const loginController = require('../controllers/login.controller')

const loginRoute = Router();

loginRoute.post('/',loginController.login);


module.exports = loginRoute;