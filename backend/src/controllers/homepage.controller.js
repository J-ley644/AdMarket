const {
    createSection,
    getHomepage,
    getSections,
    getSectionById,
    updateSection,
    deleteSection,
    createItem,
    updateItem,
    deleteItem,
} = require("../services/homepage.service");

// ==========================================
// Public Homepage
// ==========================================

const homepage = async (req, res, next) => {

    try {

        const sections = await getHomepage();

        return res.status(200).json({
            success: true,
            sections,
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Create Section
// ==========================================

const create = async (req, res, next) => {

    try {

        const section = await createSection(req.body);

        return res.status(201).json({
            success: true,
            message: "Homepage section created successfully.",
            section,
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Get All Sections
// ==========================================

const getAll = async (req, res, next) => {

    try {

        const sections = await getSections();

        return res.status(200).json({
            success: true,
            count: sections.length,
            sections,
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Get One Section
// ==========================================

const getOne = async (req, res, next) => {

    try {

        const section = await getSectionById(req.params.id);

        if (!section) {

            return res.status(404).json({
                success: false,
                message: "Homepage section not found.",
            });

        }

        return res.status(200).json({
            success: true,
            section,
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Update Section
// ==========================================

const update = async (req, res, next) => {

    try {

        const section = await updateSection(
            req.params.id,
            req.body
        );

        return res.status(200).json({
            success: true,
            message: "Homepage section updated successfully.",
            section,
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Delete Section
// ==========================================

const remove = async (req, res, next) => {

    try {

        await deleteSection(req.params.id);

        return res.status(200).json({
            success: true,
            message: "Homepage section deleted successfully.",
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Add Homepage Item
// ==========================================

const addItem = async (req, res, next) => {

    try {

        const item = await createItem(req.body);

        return res.status(201).json({
            success: true,
            message: "Homepage item added successfully.",
            item,
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Update Homepage Item
// ==========================================

const editItem = async (req, res, next) => {

    try {

        const item = await updateItem(
            req.params.id,
            req.body
        );

        return res.status(200).json({
            success: true,
            message: "Homepage item updated successfully.",
            item,
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Delete Homepage Item
// ==========================================

const removeItem = async (req, res, next) => {

    try {

        await deleteItem(req.params.id);

        return res.status(200).json({
            success: true,
            message: "Homepage item deleted successfully.",
        });

    } catch (error) {

        next(error);

    }

};

module.exports = {

    homepage,

    create,
    getAll,
    getOne,
    update,
    remove,

    addItem,
    editItem,
    removeItem,

};