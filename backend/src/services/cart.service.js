const prisma = require("../config/prisma");

// ==========================================
// Get or Create Cart
// ==========================================

const getOrCreateCart = async (userId) => {

    let cart = await prisma.cart.findUnique({

        where: {
            userId,
        },

    });

    if (!cart) {

        cart = await prisma.cart.create({

            data: {
                userId,
            },

        });

    }

    return cart;

};

// ==========================================
// Get My Cart
// ==========================================

const getCart = async (userId) => {

    const cart = await getOrCreateCart(userId);

    return await prisma.cart.findUnique({

        where: {
            id: cart.id,
        },

        include: {

            items: {

                include: {

                    product: {

                        include: {

                            business: true,
                            category: true,

                        },

                    },

                },

            },

        },

    });

};

// ==========================================
// Add Item To Cart
// ==========================================

const addToCart = async (userId, data) => {

    const cart = await getOrCreateCart(userId);

    const product = await prisma.product.findUnique({

        where: {
            id: data.productId,
        },

    });

    if (!product) {

        throw new Error("Product not found.");

    }

    const existing = await prisma.cartItem.findUnique({

        where: {

            cartId_productId: {

                cartId: cart.id,
                productId: data.productId,

            },

        },

    });

    if (existing) {

        return await prisma.cartItem.update({

            where: {

                cartId_productId: {

                    cartId: cart.id,
                    productId: data.productId,

                },

            },

            data: {

                quantity: existing.quantity + data.quantity,

            },

        });

    }

    return await prisma.cartItem.create({

        data: {

            cartId: cart.id,
            productId: data.productId,
            quantity: data.quantity,

        },

    });

};

// ==========================================
// Update Quantity
// ==========================================

const updateCartItem = async (id, quantity) => {

    return await prisma.cartItem.update({

        where: {

            id,

        },

        data: {

            quantity,

        },

    });

};

// ==========================================
// Remove Item
// ==========================================

const removeCartItem = async (id) => {

    await prisma.cartItem.delete({

        where: {

            id,

        },

    });

};

// ==========================================
// Clear Cart
// ==========================================

const clearCart = async (userId) => {

    const cart = await getOrCreateCart(userId);

    await prisma.cartItem.deleteMany({

        where: {

            cartId: cart.id,

        },

    });

};

module.exports = {

    getCart,
    addToCart,
    updateCartItem,
    removeCartItem,
    clearCart,

};