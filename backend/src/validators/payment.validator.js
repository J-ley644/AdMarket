const { body } = require("express-validator");

// ==========================================
// Create Payment Validator
// ==========================================

const createPaymentValidator = [

    body("orderId")
        .notEmpty()
        .withMessage("Order ID is required."),

    body("gateway")
        .trim()
        .notEmpty()
        .withMessage("Payment gateway is required."),

    body("currency")
        .optional()
        .trim(),

];

// ==========================================
// Update Payment Status Validator
// ==========================================

const updatePaymentStatusValidator = [

    body("status")
        .isIn([
            "PENDING",
            "PROCESSING",
            "COMPLETED",
            "FAILED",
            "REFUNDED",
        ])
        .withMessage("Invalid payment status."),

    body("transactionId")
        .optional()
        .trim(),

];

module.exports = {

    createPaymentValidator,
    updatePaymentStatusValidator,

};