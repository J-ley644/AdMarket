const {
    getCart,
    addToCart,
    updateCartItem,
    removeCartItem,
    clearCart,
} = require("../services/cart.service");

// ==========================================
// Get My Cart
// ==========================================

const getMyCart = async (req, res, next) => {

    try {

        const cart = await getCart(req.user.id);

        return res.status(200).json({
            success: true,
            cart,
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Add Item
// ==========================================

const addItem = async (req, res, next) => {

    try {

        const item = await addToCart(
            req.user.id,
            req.body
        );

        return res.status(201).json({
            success: true,
            message: "Product added to cart.",
            item,
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Update Quantity
// ==========================================

const updateItem = async (req, res, next) => {

    try {

        const item = await updateCartItem(
            req.params.id,
            req.body.quantity
        );

        return res.status(200).json({
            success: true,
            message: "Cart updated successfully.",
            item,
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Remove Item
// ==========================================

const removeItem = async (req, res, next) => {

    try {

        await removeCartItem(req.params.id);

        return res.status(200).json({
            success: true,
            message: "Item removed from cart.",
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Clear Cart
// ==========================================

const clear = async (req, res, next) => {

    try {

        await clearCart(req.user.id);

        return res.status(200).json({
            success: true,
            message: "Cart cleared successfully.",
        });

    } catch (error) {

        next(error);

    }

};

module.exports = {

    getMyCart,
    addItem,
    updateItem,
    removeItem,
    clear,

};