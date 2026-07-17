const prisma = require("../config/prisma");

// ==========================================
// Create Order From Cart
// ==========================================

const createOrder = async (userId, shippingAddress) => {

    const cart = await prisma.cart.findUnique({

        where: {
            userId,
        },

        include: {

            items: {

                include: {

                    product: true,

                },

            },

        },

    });

    if (!cart || cart.items.length === 0) {
        throw new Error("Your cart is empty.");
    }

    let subtotal = 0;

    const orderItems = cart.items.map(item => {

        subtotal += Number(item.product.price) * item.quantity;

        return {

            productId: item.productId,
            quantity: item.quantity,
            price: item.product.price,

        };

    });

    const shipping = 0;
    const tax = 0;

    const total = subtotal + shipping + tax;

    const order = await prisma.order.create({

        data: {

            userId,

            subtotal,
            shipping,
            tax,
            total,

            shippingAddress,

            items: {

                create: orderItems,

            },

        },

        include: {

            items: true,

        },

    });

    await prisma.cartItem.deleteMany({

        where: {

            cartId: cart.id,

        },

    });

    return order;

};

// ==========================================
// Get My Orders
// ==========================================

const getMyOrders = async (userId) => {

    return await prisma.order.findMany({

        where: {

            userId,

        },

        include: {

            items: {

                include: {

                    product: true,

                },

            },

        },

        orderBy: {

            createdAt: "desc",

        },

    });

};

// ==========================================
// Get Order
// ==========================================

const getOrder = async (id, user) => {

    const order = await prisma.order.findUnique({

        where: {

            id,

        },

        include: {

            items: {

                include: {

                    product: true,

                },

            },

            user: true,

        },

    });

    if (!order) {
        throw new Error("Order not found.");
    }

    if (
        user.role !== "ADMIN" &&
        order.userId !== user.id
    ) {
        throw new Error("Unauthorized.");
    }

    return order;

};

// ==========================================
// Get All Orders (Admin)
// ==========================================

const getOrders = async () => {

    return await prisma.order.findMany({

        include: {

            user: true,
            items: true,

        },

        orderBy: {

            createdAt: "desc",

        },

    });

};

// ==========================================
// Update Order Status
// ==========================================

const updateOrderStatus = async (id, status) => {

    return await prisma.order.update({

        where: {

            id,

        },

        data: {

            status,

        },

    });

};

// ==========================================
// Cancel Order
// ==========================================

const cancelOrder = async (id, user) => {

    const order = await getOrder(id, user);

    if (order.status !== "PENDING") {
        throw new Error("Only pending orders can be cancelled.");
    }

    return await prisma.order.update({

        where: {

            id,

        },

        data: {

            status: "CANCELLED",

        },

    });

};

module.exports = {

    createOrder,
    getMyOrders,
    getOrder,
    getOrders,
    updateOrderStatus,
    cancelOrder,

};