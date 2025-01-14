const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.send("Set a monthly budget");
});

router.get("/", (req, res) => {
  res.send("Get budget overview for the current month");
});

router.put("/:id", (req, res) => {
  const budgetId = req.params.id;
  res.send(`Update budget for category with ID: ${budgetId}`);
});

router.delete("/:id", (req, res) => {
  const budgetId = req.params.id;
  res.send(`Delete budget with ID: ${budgetId}`);
});

module.exports = router;
