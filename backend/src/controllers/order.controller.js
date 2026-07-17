const {
    createOrder,
    getMyOrders,
    getOrder,
    getOrders,
    updateOrderStatus,
    cancelOrder,
} = require("../services/order.service");

// ==========================================
// Create Order
// ==========================================

const create = async (req, res, next) => {

    try {

        const order = await createOrder(
            req.user.id,
            req.body.shippingAddress
        );

        return res.status(201).json({
            success: true,
            message: "Order created successfully.",
            order,
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Get My Orders
// ==========================================

const myOrders = async (req, res, next) => {

    try {

        const orders = await getMyOrders(req.user.id);

        return res.status(200).json({
            success: true,
            count: orders.length,
            orders,
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Get Single Order
// ==========================================

const getOne = async (req, res, next) => {

    try {

        const order = await getOrder(
            req.params.id,
            req.user
        );

        return res.status(200).json({
            success: true,
            order,
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Admin - Get All Orders
// ==========================================

const getAll = async (req, res, next) => {

    try {

        const orders = await getOrders();

        return res.status(200).json({
            success: true,
            count: orders.length,
            orders,
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Update Order Status
// ==========================================

const updateStatus = async (req, res, next) => {

    try {

        const order = await updateOrderStatus(
            req.params.id,
            req.body.status
        );

        return res.status(200).json({
            success: true,
            message: "Order status updated successfully.",
            order,
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Cancel Order
// ==========================================

const cancel = async (req, res, next) => {

    try {

        const order = await cancelOrder(
            req.params.id,
            req.user
        );

        return res.status(200).json({
            success: true,
            message: "Order cancelled successfully.",
            order,
        });

    } catch (error) {

        next(error);

    }

};

module.exports = {

    create,
    myOrders,
    getOne,

    getAll,
    updateStatus,

    cancel,

};