const { body } = require("express-validator");

const createSectionValidator = [

    body("title")
        .trim()
        .notEmpty()
        .withMessage("Section title is required."),

    body("type")
        .trim()
        .notEmpty()
        .withMessage("Section type is required."),

    body("displayOrder")
        .isInt({ min: 1 })
        .withMessage("Display order must be a positive number.")

];

module.exports = {
    createSectionValidator,
};