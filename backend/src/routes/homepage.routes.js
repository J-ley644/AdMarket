const express = require("express");

const router = express.Router();

const protect = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");
const validate = require("../middleware/validation.middleware");

const {
    createSectionValidator,
    updateSectionValidator,
    homepageItemValidator,
} = require("../validators/homepage.validator");

const {
    homepage,
    create,
    getAll,
    getOne,
    update,
    remove,
    addItem,
    editItem,
    removeItem,
} = require("../controllers/homepage.controller");

// ==========================================
// Public Routes
// ==========================================

// Public Homepage
router.get("/", homepage);

// ==========================================
// Admin Routes
// ==========================================

// Get All Sections
router.get(
    "/sections",
    protect,
    authorize("ADMIN"),
    getAll
);

// Get One Section
router.get(
    "/sections/:id",
    protect,
    authorize("ADMIN"),
    getOne
);

// Create Section
router.post(
    "/sections",
    protect,
    authorize("ADMIN"),
    createSectionValidator,
    validate,
    create
);

// Update Section
router.patch(
    "/sections/:id",
    protect,
    authorize("ADMIN"),
    updateSectionValidator,
    validate,
    update
);

// Delete Section
router.delete(
    "/sections/:id",
    protect,
    authorize("ADMIN"),
    remove
);

// Add Homepage Item
router.post(
    "/items",
    protect,
    authorize("ADMIN"),
    homepageItemValidator,
    validate,
    addItem
);

// Update Homepage Item
router.patch(
    "/items/:id",
    protect,
    authorize("ADMIN"),
    homepageItemValidator,
    validate,
    editItem
);

// Delete Homepage Item
router.delete(
    "/items/:id",
    protect,
    authorize("ADMIN"),
    removeItem
);

module.exports = router;