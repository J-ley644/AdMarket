const { body } = require("express-validator");

// ==========================================
// Create Business Validator
// ==========================================

const createBusinessValidator = [

    body("name")
        .trim()
        .notEmpty()
        .withMessage("Business name is required.")
        .isLength({ min: 3, max: 100 })
        .withMessage("Business name must be between 3 and 100 characters."),

    body("description")
        .optional()
        .trim()
        .isLength({ max: 1000 })
        .withMessage("Description cannot exceed 1000 characters."),

    body("email")
        .optional()
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage("Please provide a valid business email."),

    body("phone")
        .optional()
        .trim()
        .isLength({ min: 10, max: 15 })
        .withMessage("Phone number must be between 10 and 15 characters."),

    body("website")
        .optional()
        .trim()
        .isURL()
        .withMessage("Please provide a valid website URL."),

    body("country")
        .optional()
        .trim(),

    body("county")
        .optional()
        .trim(),

    body("city")
        .optional()
        .trim(),

    body("address")
        .optional()
        .trim(),

];

module.exports = {
    createBusinessValidator,
};