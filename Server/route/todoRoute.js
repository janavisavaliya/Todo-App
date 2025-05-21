const express = require('express');

const routes = express.Router();

const { addTask, viewTask, deleteTask } = require('../controller/todoController')

routes.post('/add', addTask);
routes.get('/view', viewTask)
routes.get('/delete', deleteTask)

module.exports = routes;