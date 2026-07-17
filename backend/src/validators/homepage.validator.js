const { body } = require("express-validator");

// ==========================================
// Create Homepage Section Validator
// ==========================================

const createSectionValidator = [

    body("title")
        .trim()
        .notEmpty()
        .withMessage("Section title is required."),

    body("type")
        .trim()
        .notEmpty()
        .withMessage("Section type is required."),

    body("layout")
        .optional()
        .trim(),

    body("displayOrder")
        .isInt({ min: 1 })
        .withMessage("Display order must be a positive number."),

    body("maxItems")
        .optional()
        .isInt({ min: 1 })
        .withMessage("Maximum items must be greater than zero."),

    body("backgroundColor")
        .optional()
        .trim(),

    body("textColor")
        .optional()
        .trim(),

    body("icon")
        .optional()
        .trim(),

    body("bannerImage")
        .optional()
        .trim(),

    body("buttonText")
        .optional()
        .trim(),

    body("buttonLink")
        .optional()
        .trim(),

];

// ==========================================
// Update Homepage Section Validator
// ==========================================

const updateSectionValidator = [

    body("title")
        .optional()
        .trim(),

    body("subtitle")
        .optional()
        .trim(),

    body("layout")
        .optional()
        .trim(),

    body("backgroundColor")
        .optional()
        .trim(),

    body("textColor")
        .optional()
        .trim(),

    body("icon")
        .optional()
        .trim(),

    body("bannerImage")
        .optional()
        .trim(),

    body("buttonText")
        .optional()
        .trim(),

    body("buttonLink")
        .optional()
        .trim(),

    body("displayOrder")
        .optional()
        .isInt({ min: 1 }),

    body("maxItems")
        .optional()
        .isInt({ min: 1 }),

];

// ==========================================
// Homepage Item Validator
// ==========================================

const homepageItemValidator = [

    body("sectionId")
        .notEmpty()
        .withMessage("Section ID is required."),

    body("displayOrder")
        .isInt({ min: 1 })
        .withMessage("Display order must be a positive number."),

];

module.exports = {

    createSectionValidator,
    updateSectionValidator,
    homepageItemValidator,

};