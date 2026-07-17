const { body } = require("express-validator");

// ==========================================
// Create Order Validator
// ==========================================

const createOrderValidator = [

    body("shippingAddress")
        .trim()
        .notEmpty()
        .withMessage("Shipping address is required."),

];

// ==========================================
// Update Order Status Validator
// ==========================================

const updateOrderStatusValidator = [

    body("status")
        .isIn([
            "PENDING",
            "PAID",
            "PROCESSING",
            "SHIPPED",
            "DELIVERED",
            "CANCELLED",
        ])
        .withMessage("Invalid order status."),

];

module.exports = {

    createOrderValidator,
    updateOrderStatusValidator,

};