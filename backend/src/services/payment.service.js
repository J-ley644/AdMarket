const prisma = require("../config/prisma");

// ==========================================
// Create Payment
// ==========================================

const createPayment = async (user, data) => {

    const order = await prisma.order.findUnique({

        where: {
            id: data.orderId,
        },

        include: {
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

    const payment = await prisma.payment.create({

        data: {

            orderId: order.id,

            gateway: data.gateway,

            amount: order.total,

            currency: data.currency || "KES",

            reference: data.reference || null,

            metadata: data.metadata || null,

        },

    });

    return payment;

};

// ==========================================
// Get My Payments
// ==========================================

const getMyPayments = async (user) => {

    if (user.role === "ADMIN") {

        return await prisma.payment.findMany({

            include: {

                order: true,

            },

            orderBy: {

                createdAt: "desc",

            },

        });

    }

    return await prisma.payment.findMany({

        where: {

            order: {

                userId: user.id,

            },

        },

        include: {

            order: true,

        },

        orderBy: {

            createdAt: "desc",

        },

    });

};

// ==========================================
// Get Payment
// ==========================================

const getPayment = async (id, user) => {

    const payment = await prisma.payment.findUnique({

        where: {

            id,

        },

        include: {

            order: true,

        },

    });

    if (!payment) {

        throw new Error("Payment not found.");

    }

    if (
        user.role !== "ADMIN" &&
        payment.order.userId !== user.id
    ) {

        throw new Error("Unauthorized.");

    }

    return payment;

};

// ==========================================
// Update Payment Status
// ==========================================

const updatePaymentStatus = async (
    id,
    status,
    transactionId
) => {

    const payment = await prisma.payment.update({

        where: {

            id,

        },

        data: {

            status,
            transactionId,

        },

    });

    if (status === "COMPLETED") {

        await prisma.order.update({

            where: {

                id: payment.orderId,

            },

            data: {

                status: "PAID",

            },

        });

    }

    return payment;

};

module.exports = {

    createPayment,
    getMyPayments,
    getPayment,
    updatePaymentStatus,

};