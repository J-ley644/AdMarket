const { body } = require("express-validator");

// ==========================================
// Register Validator
// ==========================================

const registerValidator = [

    body("firstName")
        .trim()
        .notEmpty()
        .withMessage("First name is required.")
        .isLength({ min: 2, max: 50 })
        .withMessage("First name must be between 2 and 50 characters."),

    body("lastName")
        .trim()
        .notEmpty()
        .withMessage("Last name is required.")
        .isLength({ min: 2, max: 50 })
        .withMessage("Last name must be between 2 and 50 characters."),

    body("email")
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage("A valid email address is required."),

    body("password")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long.")
        .matches(/[A-Z]/)
        .withMessage("Password must contain at least one uppercase letter.")
        .matches(/[a-z]/)
        .withMessage("Password must contain at least one lowercase letter.")
        .matches(/[0-9]/)
        .withMessage("Password must contain at least one number."),

    body("phone")
        .optional()
        .trim()
        .isLength({ min: 10, max: 15 })
        .withMessage("Phone number must be between 10 and 15 digits.")

];

// ==========================================
// Login Validator
// ==========================================

const loginValidator = [

    body("email")
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage("A valid email address is required."),

    body("password")
        .notEmpty()
        .withMessage("Password is required.")

];

module.exports = {
    registerValidator,
    loginValidator,
};