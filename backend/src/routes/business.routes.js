const express = require("express");

const router = express.Router();

const protect = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");
const validate = require("../middleware/validation.middleware");

const {
    createBusinessValidator,
} = require("../validators/business.validator");

const {
    create,
    getAll,
    getOne,
    update,
    remove,
} = require("../controllers/business.controller");

// ==========================================
// Public Routes
// ==========================================

// Get all businesses
router.get("/", getAll);

// Get single business
router.get("/:id", getOne);

// ==========================================
// Protected Routes
// ==========================================

// Create Business
router.post(
    "/",
    protect,
    createBusinessValidator,
    validate,
    create
);

// Update Business
router.patch(
    "/:id",
    protect,
    authorize("SELLER", "ADMIN"),
    update
);

// Delete Business
router.delete(
    "/:id",
    protect,
    authorize("SELLER", "ADMIN"),
    remove
);

module.exports = router;