const express = require("express");
const protect = require("../middleware/users");
const router = express.Router();

router.get("/", protect, (req, res) => {
  res.send("Get all transactions");
});

router.post("/", (req, res) => {
  res.send("Add a new transaction");
});

router.put("/:id", (req, res) => {
  const transactionId = req.params.id;
  res.send(`Update transaction with ID: ${transactionId}`);
});

router.delete("/:id", (req, res) => {
  const transactionId = req.params.id;
  res.send(`Delete transaction with ID: ${transactionId}`);
});

router.get("/filter", (req, res) => {
  res.send("Filter transactions by category or date");
});

module.exports = router;
