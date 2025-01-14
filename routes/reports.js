const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Generate financial report for selected period");
});

router.get("/expenses", (req, res) => {
  res.send("Expense breakdown by category");
});

router.get("/income-expense", (req, res) => {
  res.send("Income vs Expense report");
});

module.exports = router;
