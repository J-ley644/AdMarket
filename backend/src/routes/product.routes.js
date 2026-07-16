const express = require("express");

const router = express.Router();

const protect = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");
const validate = require("../middleware/validation.middleware");

const {
    createProductValidator,
} = require("../validators/product.validator");

const {
    create,
    getAll,
} = require("../controllers/product.controller");

// ==========================================
// Public Routes
// ==========================================

// Get all products
router.get("/", getAll);

// ==========================================
// Seller/Admin Routes
// ==========================================

// Create Product
router.post(
    "/",
    protect,
    authorize("SELLER", "ADMIN"),
    createProductValidator,
    validate,
    create
);

module.exports = router;