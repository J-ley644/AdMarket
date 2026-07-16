const {
    createProduct,
    getProducts,
} = require("../services/product.service");

// ==========================================
// Create Product
// ==========================================

const create = async (req, res, next) => {

    try {

        const product = await createProduct(
            req.body,
            req.user
        );

        return res.status(201).json({
            success: true,
            message: "Product created successfully.",
            product,
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Get All Products
// ==========================================

const getAll = async (req, res, next) => {

    try {

        const products = await getProducts();

        return res.status(200).json({
            success: true,
            count: products.length,
            products,
        });

    } catch (error) {

        next(error);

    }

};

module.exports = {
    create,
    getAll,
};