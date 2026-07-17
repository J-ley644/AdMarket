const express = require("express");

const router = express.Router();

const protect = require("../middleware/auth.middleware");
const validate = require("../middleware/validation.middleware");

const {
    addToCartValidator,
    updateCartValidator,
} = require("../validators/cart.validator");

const {
    getMyCart,
    addItem,
    updateItem,
    removeItem,
    clear,
} = require("../controllers/cart.controller");

// ==========================================
// All Cart Routes Require Login
// ==========================================

router.use(protect);

// Get My Cart
router.get("/", getMyCart);

// Add Item
router.post(
    "/",
    addToCartValidator,
    validate,
    addItem
);

// Update Quantity
router.patch(
    "/:id",
    updateCartValidator,
    validate,
    updateItem
);

// Remove Item
router.delete("/:id", removeItem);

// Clear Cart
router.delete("/", clear);

module.exports = router;