const express = require('express');

const routes = express.Router();

routes.use('/todo', require('./todoRoute'));

module.exports = routes