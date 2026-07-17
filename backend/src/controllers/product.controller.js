const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    searchProducts,
    getProductsByCategory,
    getProductsByBusiness,
    getFeaturedProducts,
    getLatestProducts,
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

// ==========================================
// Get Product By ID
// ==========================================

const getOne = async (req, res, next) => {

    try {

        const product = await getProductById(req.params.id);

        if (!product) {

            return res.status(404).json({
                success: false,
                message: "Product not found.",
            });

        }

        return res.status(200).json({
            success: true,
            product,
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Update Product
// ==========================================

const update = async (req, res, next) => {

    try {

        const product = await updateProduct(
            req.params.id,
            req.body,
            req.user
        );

        return res.status(200).json({
            success: true,
            message: "Product updated successfully.",
            product,
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Delete Product
// ==========================================

const remove = async (req, res, next) => {

    try {

        const result = await deleteProduct(
            req.params.id,
            req.user
        );

        return res.status(200).json({
            success: true,
            message: result.message,
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Search Products
// ==========================================

const search = async (req, res, next) => {

    try {

        const products = await searchProducts(req.query.q || "");

        return res.status(200).json({
            success: true,
            count: products.length,
            products,
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Get Products By Category
// ==========================================

const byCategory = async (req, res, next) => {

    try {

        const products = await getProductsByCategory(
            req.params.categoryId
        );

        return res.status(200).json({
            success: true,
            count: products.length,
            products,
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Get Products By Business
// ==========================================

const byBusiness = async (req, res, next) => {

    try {

        const products = await getProductsByBusiness(
            req.params.businessId
        );

        return res.status(200).json({
            success: true,
            count: products.length,
            products,
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Featured Products
// ==========================================

const featured = async (req, res, next) => {

    try {

        const products = await getFeaturedProducts();

        return res.status(200).json({
            success: true,
            count: products.length,
            products,
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Latest Products
// ==========================================

const latest = async (req, res, next) => {

    try {

        const products = await getLatestProducts();

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
    getOne,
    update,
    remove,
    search,
    byCategory,
    byBusiness,
    featured,
    latest,

};