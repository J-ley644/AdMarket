const express = require("express");

const router = express.Router();

const protect = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");
const validate = require("../middleware/validation.middleware");

const {
    createOrderValidator,
    updateOrderStatusValidator,
} = require("../validators/order.validator");

const {
    create,
    myOrders,
    getOne,
    getAll,
    updateStatus,
    cancel,
} = require("../controllers/order.controller");

// ==========================================
// Buyer Routes
// ==========================================

// Create Order
router.post(
    "/",
    protect,
    createOrderValidator,
    validate,
    create
);

// Get My Orders
router.get(
    "/my-orders",
    protect,
    myOrders
);

// Get Single Order
router.get(
    "/:id",
    protect,
    getOne
);

// Cancel Order
router.patch(
    "/:id/cancel",
    protect,
    cancel
);

// ==========================================
// Admin Routes
// ==========================================

// Get All Orders
router.get(
    "/",
    protect,
    authorize("ADMIN"),
    getAll
);

// Update Status
router.patch(
    "/:id/status",
    protect,
    authorize("ADMIN"),
    updateOrderStatusValidator,
    validate,
    updateStatus
);

module.exports = router;