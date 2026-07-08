const express = require("express");

const routes = require("./routes");

const app = express();

// Built-in Middleware
app.use(express.json());

// API Routes
app.use("/api/v1", routes);

module.exports = app;