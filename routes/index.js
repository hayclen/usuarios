const { Router } = require('express');
const api = Router();
const userRoutes = require('./users.route');
const loginRoute = require ('./login.routers');
const { verifyToken } = require('../middlewares/auth.middleware');

api.use('/users', verifyToken, userRoutes);
api.use('/login', loginRoute);

module.exports = api;