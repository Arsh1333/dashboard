import express from "express";
import Task from "../models/Tasks.models.js";
import {verifyToken} from "../middlewares/auth.middleware.js";

const router = express.Router();


router.post("/", verifyToken, async (req, res) => {
  try {
    const { title, description, deadline } = req.body;
    const newTask = new Task({
      title,
      description,
      deadline,
      user: req.user, 
    });
    await newTask.save();
    res.status(201).json({ msg: "Task added successfully", task: newTask });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error adding task" });
  }
});

router.get("/", verifyToken, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error fetching tasks" });
  }
});
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.user });
    if (!task) return res.status(404).json({ msg: "Task not found" });
    res.json({ msg: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});
export default router;
