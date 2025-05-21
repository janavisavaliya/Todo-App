const todo = require('../model/todoModel');

const addTask = async (req, res) => {
    try {
        const { taskname } = req.body;
        const addTask = await todo.create({
            taskname: taskname
        })
        return res.status(200).send({
            success: true,
            message: "Task Succesfully added",
            taskname
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
        return false;
    }
}

// const deleteTask = async (req, res) => {
//     try {
//         const { _id } = req.body;
//         let deleteTodo = await todo.findByIdAndDelete({ _id })
//         return res.status(200).send({
//             success: true,
//             message: "record deleted",
//             taskname: deleteTodo.taskname
//         })
//     } catch (err) {
//         console.log(err);
//         return false;
//     }
// }

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params; // assuming the ID is sent as a URL parameter
        const deleteTodo = await todo.findByIdAndDelete(id);

        if (!deleteTodo) {
            return res.status(404).send({
                success: false,
                message: "Task not found",
            });
        }

        return res.status(200).send({
            success: true,
            message: "Record deleted",
            taskname: deleteTodo.taskname, // assuming taskname is a field in the document
        });
    } catch (err) {
        console.error(err);
        return false;
    }
}


module.exports = {
    addTask, viewTask, deleteTask
}

