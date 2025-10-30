import express from "express";
import {verifyToken} from "../middlewares/auth.middleware.js";
import Goal from "../models/Goals.models.js";


const router = express.Router();

router.get("/", verifyToken, async (req, res) => {
  try {
    const goals = await Goal.find({ user: req.user }).sort({ createdAt: -1 });
    res.json(goals);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

router.post("/", verifyToken, async (req, res) => {
  try {
    const { title, description } = req.body;
    const newGoal = new Goal({
      user: req.user,
      title,
      description,
    });
    const savedGoal = await newGoal.save();
    res.json(savedGoal);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;
