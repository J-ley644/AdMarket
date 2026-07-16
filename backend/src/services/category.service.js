const prisma = require("../config/prisma");

// Create Category
const createCategory = async (data) => {

    return await prisma.category.create({

        data: {

            name: data.name.trim(),
            slug: data.slug.trim(),
            description: data.description || null,
            icon: data.icon || null,
            image: data.image || null,

        },

    });

};

// Get Categories
const getCategories = async () => {

    return await prisma.category.findMany({

        orderBy: {
            name: "asc",
        },

    });

};

// Get Category
const getCategoryById = async (id) => {

    return await prisma.category.findUnique({

        where: { id },

    });

};

// Update Category
const updateCategory = async (id, data) => {

    return await prisma.category.update({

        where: { id },

        data,

    });

};

// Delete Category
const deleteCategory = async (id) => {

    return await prisma.category.delete({

        where: { id },

    });

};

module.exports = {

    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,

};