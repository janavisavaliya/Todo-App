const express = require('express');

const routes = express.Router();

const { addTask, viewTask } = require('../controller/todoController')

routes.post('/add', addTask);
routes.get('/view', viewTask)

module.exports = routes;