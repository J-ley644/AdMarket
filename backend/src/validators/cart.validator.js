const { body } = require("express-validator");

// ==========================================
// Add Item Validator
// ==========================================

const addToCartValidator = [

    body("productId")
        .notEmpty()
        .withMessage("Product ID is required."),

    body("quantity")
        .isInt({ min: 1 })
        .withMessage("Quantity must be at least 1."),

];

// ==========================================
// Update Quantity Validator
// ==========================================

const updateCartValidator = [

    body("quantity")
        .isInt({ min: 1 })
        .withMessage("Quantity must be at least 1."),

];

module.exports = {

    addToCartValidator,
    updateCartValidator,

};