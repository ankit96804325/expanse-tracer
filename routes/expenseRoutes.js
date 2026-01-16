const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");

// Home page
router.get("/", async (req, res) => {
    const expenses = await Expense.find().sort({ date: -1 });
    res.render("index", { expenses });
});

// Add expense
router.post("/add", async (req, res) => {
    const { amount, category, date, note } = req.body;
    await Expense.create({ amount, category, date, note });
    res.redirect("/");
});

// Delete expense
router.get("/delete/:id", async (req, res) => {
    await Expense.findByIdAndDelete(req.params.id);
    res.redirect("/");
});

module.exports = router;
