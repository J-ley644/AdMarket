const express = require("express");

const routes = require("./routes");
const securityMiddleware = require("./middleware/security");
const logger = require("./middleware/logger");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Security
app.use(securityMiddleware);

// Logger
app.use(logger);

// Body Parser
app.use(express.json());

// Routes
app.use("/api/v1", routes);

// 404 Handler
app.use(notFound);

// Global Error Handler
app.use(errorHandler);

module.exports = app;