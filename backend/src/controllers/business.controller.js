const {

    createBusiness,
    getBusinesses,
    getBusinessById,
    updateBusiness,
    deleteBusiness,

} = require("../services/business.service");

// ==========================================
// Create Business
// ==========================================

const create = async (req, res, next) => {

    try {

        const business = await createBusiness(
            req.body,
            req.user.id
        );

        return res.status(201).json({

            success: true,
            message: "Business created successfully.",
            business,

        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Get All Businesses
// ==========================================

const getAll = async (req, res, next) => {

    try {

        const businesses = await getBusinesses();

        return res.status(200).json({

            success: true,
            count: businesses.length,
            businesses,

        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Get Business By ID
// ==========================================

const getOne = async (req, res, next) => {

    try {

        const business = await getBusinessById(
            req.params.id
        );

        if (!business) {

            return res.status(404).json({

                success: false,
                message: "Business not found.",

            });

        }

        return res.status(200).json({

            success: true,
            business,

        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Update Business
// ==========================================

const update = async (req, res, next) => {

    try {

        const business = await updateBusiness(
            req.params.id,
            req.body,
            req.user
        );

        return res.status(200).json({

            success: true,
            message: "Business updated successfully.",
            business,

        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Delete Business
// ==========================================

const remove = async (req, res, next) => {

    try {

        await deleteBusiness(
    req.params.id,
    req.user
);

        return res.status(200).json({

            success: true,
            message: "Business deleted successfully.",

        });

    } catch (error) {

        next(error);

    }

};

module.exports = {

    create,
    getAll,
    getOne,
    update,
    remove,

};