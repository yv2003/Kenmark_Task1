import express from "express";
const router = express.Router();
// import { createTask,updateTask,deleteTask,fetchAllTask,fetchTaskById } from "../controller/taskController.js";
import taskController from "../controller/taskController.js"
router.post("/create", taskController.createTask);
router.get("/fetchAll",taskController.fetchAllTask)
router.get("/fetchById/:id", taskController.fetchTaskById)
router.put("/update/:id", taskController.updateTask)
router.delete("/delete/:id", taskController.deleteTask)
export default router;