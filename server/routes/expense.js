import express from "express";
import Expense from "../models/Expense.js";

const router = express.Router();

// Create
router.post("/add", async (req, res) => {
  try {
    const newExpense = new Expense(req.body);
    const saved = await newExpense.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Read all
router.get("/", async (req, res) => {
  const data = await Expense.find().sort({ date: -1 });
  res.json(data);
});

// Delete
router.delete("/:id", async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

export default router;
