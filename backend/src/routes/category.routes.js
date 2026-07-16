const express = require("express");

const router = express.Router();

const protect = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");
const validate = require("../middleware/validation.middleware");

const {
    createCategoryValidator,
} = require("../validators/category.validator");

const {
    create,
    getAll,
    getOne,
    update,
    remove,
} = require("../controllers/category.controller");

// ==========================================
// Public Routes
// ==========================================

// Get all categories
router.get("/", getAll);

// Get single category
router.get("/:id", getOne);

// ==========================================
// Admin Routes
// ==========================================

// Create category
router.post(
    "/",
    protect,
    authorize("ADMIN"),
    createCategoryValidator,
    validate,
    create
);

// Update category
router.patch(
    "/:id",
    protect,
    authorize("ADMIN"),
    update
);

// Delete category
router.delete(
    "/:id",
    protect,
    authorize("ADMIN"),
    remove
);

module.exports = router;