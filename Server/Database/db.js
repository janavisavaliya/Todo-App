const mongoose = require('mongoose');
const todo = require('../model/todoModel');

mongoose.connect(`mongodb://127.0.0.1/Todo-App`);

const db = mongoose.connection;

db.on('connected', (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Database Connected Successfully`);
})

module.exports = db;