const express = require("express");

const router = express.Router();

const protect = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");
const validate = require("../middleware/validation.middleware");
const upload = require("../middleware/upload.middleware");

const {
    createProductValidator,
    updateProductValidator,
} = require("../validators/product.validator");

const {
    create,
    getAll,
    getOne,
    update,
    remove,
    search,
    byCategory,
    byBusiness,
    featured,
    latest,
} = require("../controllers/product.controller");

// ==========================================
// Public Routes
// ==========================================

// Search Products
router.get("/search", search);

// Featured Products
router.get("/featured", featured);

// Latest Products
router.get("/latest", latest);

// Products By Category
router.get("/category/:categoryId", byCategory);

// Products By Business
router.get("/business/:businessId", byBusiness);

// Get All Products
router.get("/", getAll);

// Get Single Product
router.get("/:id", getOne);

// ==========================================
// Seller/Admin Routes
// ==========================================

// Create Product
router.post(
    "/",
    protect,
    authorize("SELLER", "ADMIN"),
    upload.single("image"),
    createProductValidator,
    validate,
    create
);

// Update Product
router.patch(
    "/:id",
    protect,
    authorize("SELLER", "ADMIN"),
    updateProductValidator,
    validate,
    update
);

// Delete Product
router.delete(
    "/:id",
    protect,
    authorize("SELLER", "ADMIN"),
    remove
);

module.exports = router;