const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const expenseRoutes = require("./routes/expenseRoutes");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));


// Middleware
app.set("view engine", "ejs");

// 👇 IMPORTANT for Vercel
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", expenseRoutes);

// ❌ NO app.listen() on Vercel
module.exports = app;
