const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const app = express();
const port = 5000;

dotenv.config();

connectDB();

const userRoutes = require("./routes/users");
const transactionRoutes = require("./routes/transactions");
const budgetRoutes = require("./routes/budgets");
const reportRoutes = require("./routes/reports");

app.use(express.json());

app.use("/users", userRoutes);
app.use("/transactions", transactionRoutes);
app.use("/budgets", budgetRoutes);
app.use("/reports", reportRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to the Personal Finance Tracker API!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
