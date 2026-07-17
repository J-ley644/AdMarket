const {
    createPayment,
    getMyPayments,
    getPayment,
    updatePaymentStatus,
} = require("../services/payment.service");

// ==========================================
// Create Payment
// ==========================================

const create = async (req, res, next) => {

    try {

        const payment = await createPayment(
            req.user,
            req.body
        );

        return res.status(201).json({

            success: true,
            message: "Payment created successfully.",
            payment,

        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Get My Payments
// ==========================================

const getAll = async (req, res, next) => {

    try {

        const payments = await getMyPayments(req.user);

        return res.status(200).json({

            success: true,
            count: payments.length,
            payments,

        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Get Single Payment
// ==========================================

const getOne = async (req, res, next) => {

    try {

        const payment = await getPayment(
            req.params.id,
            req.user
        );

        return res.status(200).json({

            success: true,
            payment,

        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Update Payment Status (Admin/Webhook)
// ==========================================

const updateStatus = async (req, res, next) => {

    try {

        const payment = await updatePaymentStatus(

            req.params.id,
            req.body.status,
            req.body.transactionId

        );

        return res.status(200).json({

            success: true,
            message: "Payment updated successfully.",
            payment,

        });

    } catch (error) {

        next(error);

    }

};

module.exports = {

    create,
    getAll,
    getOne,
    updateStatus,

};