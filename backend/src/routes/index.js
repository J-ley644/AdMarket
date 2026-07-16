const express = require("express");

const healthRoutes = require("./health.routes");
const authRoutes = require("./auth.routes");
const businessRoutes = require("./business.routes");
const categoryRoutes = require("./category.routes");
const productRoutes = require("./product.routes");

const router = express.Router();

router.use("/", healthRoutes);

router.use("/auth", authRoutes);

router.use("/businesses", businessRoutes);

router.use("/categories", categoryRoutes);

router.use("/products", productRoutes);

module.exports = router;