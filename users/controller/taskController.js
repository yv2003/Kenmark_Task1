import Task from "../../model/Task.js";

 const createTask = async (req, res) => {
    try {
        const { Title, Description, Status, DueDate } = req.body;
        const user = await Task.create( { Title, Description, Status, DueDate });
        console.log(user.json());
        res.json();
    } catch(e) {
        console.log("Error in create:::", e);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

 const fetchAllTask = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch(e) {
        console.log("Error in fetchAll:::", e);
        res.status(500).json({ error: "Internal Server Error" });
    }
}



 const fetchTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ error: "Task not found" });

        res.json(task);
    } catch (e) {
        console.error("Error in fetchTaskById:", e);
        res.status(500).json({ error: "Internal Server Error" });
    }
}



 const updateTask = async (req, res) => {
    try {
        const {title,status,description} = req.body
        const task = await Task.destroy(req.params.id);
        if (title) task.title = title;
        if (status) task.status = status;
        if (description) task.description = description;
        await task.save();
        res.json(task);
    } catch(e) {
        console.log("Error in Update:::", e);
        res.status(500).json({ error: "Internal Server Error" });
    }
}


 const deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ error: "Task not found" });
        await task.destroy();
        res.json({ message: "Task deleted successfully" });
    } catch(e) {
        console.log("Error in delete:::", e);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export default {
    createTask, updateTask, fetchAllTask, fetchTaskById, deleteTask
};