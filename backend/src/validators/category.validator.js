const { body } = require("express-validator");

const createCategoryValidator = [

    body("name")
        .trim()
        .notEmpty()
        .withMessage("Category name is required.")
        .isLength({ min: 2, max: 50 })
        .withMessage("Category name must be between 2 and 50 characters."),

    body("slug")
        .trim()
        .notEmpty()
        .withMessage("Slug is required."),

    body("description")
        .optional()
        .trim(),

    body("icon")
        .optional()
        .trim(),

    body("image")
        .optional()
        .trim(),

];

module.exports = {
    createCategoryValidator,
};