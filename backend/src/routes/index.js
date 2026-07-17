const express = require("express");

const healthRoutes = require("./health.routes");
const authRoutes = require("./auth.routes");
const businessRoutes = require("./business.routes");
const categoryRoutes = require("./category.routes");
const productRoutes = require("./product.routes");
const homepageRoutes = require("./homepage.routes");
const cartRoutes = require("./cart.routes");
const orderRoutes = require("./order.routes");
const paymentRoutes = require("./payment.routes");
const uploadRoutes = require("./upload.routes");

const router = express.Router();

// Health
router.use("/", healthRoutes);

// Authentication
router.use("/auth", authRoutes);

// Businesses
router.use("/businesses", businessRoutes);

// Categories
router.use("/categories", categoryRoutes);

// Products
router.use("/products", productRoutes);

// Homepage Manager
router.use("/homepage", homepageRoutes);

//cart
router.use("/cart", cartRoutes);

router.use("/orders", orderRoutes);

router.use("/payments", paymentRoutes);

// Uploads
router.use("/upload", uploadRoutes);

module.exports = router;