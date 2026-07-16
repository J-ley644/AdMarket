const {

    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,

} = require("../services/category.service");

// ==========================================
// Create Category
// ==========================================

const create = async (req, res, next) => {

    try {

        const category = await createCategory(req.body);

        return res.status(201).json({

            success: true,
            message: "Category created successfully.",
            category,

        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Get All Categories
// ==========================================

const getAll = async (req, res, next) => {

    try {

        const categories = await getCategories();

        return res.status(200).json({

            success: true,
            count: categories.length,
            categories,

        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Get Category By ID
// ==========================================

const getOne = async (req, res, next) => {

    try {

        const category = await getCategoryById(req.params.id);

        if (!category) {

            return res.status(404).json({

                success: false,
                message: "Category not found.",

            });

        }

        return res.status(200).json({

            success: true,
            category,

        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Update Category
// ==========================================

const update = async (req, res, next) => {

    try {

        const category = await updateCategory(
            req.params.id,
            req.body
        );

        return res.status(200).json({

            success: true,
            message: "Category updated successfully.",
            category,

        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Delete Category
// ==========================================

const remove = async (req, res, next) => {

    try {

        await deleteCategory(req.params.id);

        return res.status(200).json({

            success: true,
            message: "Category deleted successfully.",

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