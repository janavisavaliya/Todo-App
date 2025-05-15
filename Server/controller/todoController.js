const todo = require('../model/todoModel');

const addTask = async (req, res) => {
    try {
        const { taskname } = req.body;
        const addTask = await todo.create({
            taskname: taskname
        })
        return res.status(200).send({
            success: true,
            message: "Task Succesfully added"
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const viewTask = async (req, res) => {
    try {
        let alltodo = await todo.find({})
        return res.status(200).send({
            success: true,
            message: "All record fetched successfully",
            alltodo
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    addTask, viewTask
}

