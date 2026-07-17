const express = require("express");

const router = express.Router();

const protect = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");
const validate = require("../middleware/validation.middleware");

const {
    createPaymentValidator,
    updatePaymentStatusValidator,
} = require("../validators/payment.validator");

const {
    create,
    getAll,
    getOne,
    updateStatus,
} = require("../controllers/payment.controller");

// ==========================================
// Buyer Routes
// ==========================================

// Create Payment
router.post(
    "/",
    protect,
    createPaymentValidator,
    validate,
    create
);

// My Payments
router.get(
    "/",
    protect,
    getAll
);

// Single Payment
router.get(
    "/:id",
    protect,
    getOne
);

// ==========================================
// Admin Routes
// ==========================================

// Update Payment Status
router.patch(
    "/:id/status",
    protect,
    authorize("ADMIN"),
    updatePaymentStatusValidator,
    validate,
    updateStatus
);

module.exports = router;