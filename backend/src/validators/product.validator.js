const { body } = require("express-validator");

// ==========================================
// Create Product Validator
// ==========================================

const createProductValidator = [

    body("name")
        .trim()
        .notEmpty()
        .withMessage("Product name is required.")
        .isLength({ min: 3, max: 150 })
        .withMessage("Product name must be between 3 and 150 characters."),

    body("slug")
        .trim()
        .notEmpty()
        .withMessage("Product slug is required."),

    body("price")
        .isFloat({ min: 0 })
        .withMessage("Price must be a valid positive number."),

    body("discountPrice")
        .optional()
        .isFloat({ min: 0 })
        .withMessage("Discount price must be a valid number."),

    body("stock")
        .isInt({ min: 0 })
        .withMessage("Stock must be zero or greater."),

    body("businessId")
        .notEmpty()
        .withMessage("Business ID is required."),

    body("categoryId")
        .notEmpty()
        .withMessage("Category ID is required."),

    body("description")
        .optional()
        .trim(),

    body("shortDescription")
        .optional()
        .trim(),

];

module.exports = {
    createProductValidator,
};