const express = require("express");
const mongoose = require("mongoose");
const expenseRoutes = require("./routes/expenseRoutes");

const app = express();

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/expenseTracker")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes
app.use("/", expenseRoutes);

// Server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
