const prisma = require("../config/prisma");

// ==========================================
// Create Homepage Section
// ==========================================

const createSection = async (data) => {

    return await prisma.homepageSection.create({

        data: {

            title: data.title,
            subtitle: data.subtitle || null,

            type: data.type,

            layout: data.layout || "grid",

            backgroundColor: data.backgroundColor || null,
            textColor: data.textColor || null,

            icon: data.icon || null,
            bannerImage: data.bannerImage || null,

            buttonText: data.buttonText || null,
            buttonLink: data.buttonLink || null,

            maxItems: data.maxItems || 10,

            displayOrder: data.displayOrder,

        },

    });

};

// ==========================================
// Get Homepage
// ==========================================

const getHomepage = async () => {

    return await prisma.homepageSection.findMany({

        where: {

            isEnabled: true,

        },

        include: {

            items: {

                where: {

                    isEnabled: true,

                },

                include: {

                    product: true,
                    business: true,
                    category: true,

                },

                orderBy: {

                    displayOrder: "asc",

                },

            },

        },

        orderBy: {

            displayOrder: "asc",

        },

    });

};

// ==========================================
// Get All Sections
// ==========================================

const getSections = async () => {

    return await prisma.homepageSection.findMany({

        include: {

            items: true,

        },

        orderBy: {

            displayOrder: "asc",

        },

    });

};

// ==========================================
// Get Section By ID
// ==========================================

const getSectionById = async (id) => {

    return await prisma.homepageSection.findUnique({

        where: {

            id,

        },

        include: {

            items: {

                include: {

                    product: true,
                    business: true,
                    category: true,

                },

                orderBy: {

                    displayOrder: "asc",

                },

            },

        },

    });

};

// ==========================================
// Update Section
// ==========================================

const updateSection = async (id, data) => {

    return await prisma.homepageSection.update({

        where: {

            id,

        },

        data: {

            title: data.title,
            subtitle: data.subtitle,

            layout: data.layout,

            backgroundColor: data.backgroundColor,
            textColor: data.textColor,

            icon: data.icon,
            bannerImage: data.bannerImage,

            buttonText: data.buttonText,
            buttonLink: data.buttonLink,

            maxItems: data.maxItems,

            type: data.type,

            displayOrder: data.displayOrder,

            isEnabled: data.isEnabled,

        },

    });

};

// ==========================================
// Delete Section
// ==========================================

const deleteSection = async (id) => {

    await prisma.homepageSection.delete({

        where: {

            id,

        },

    });

};

// ==========================================
// Add Item To Section
// ==========================================

const createItem = async (data) => {

    return await prisma.homepageSectionItem.create({

        data,

    });

};

// ==========================================
// Update Homepage Item
// ==========================================

const updateItem = async (id, data) => {

    return await prisma.homepageSectionItem.update({

        where: {

            id,

        },

        data,

    });

};

// ==========================================
// Delete Homepage Item
// ==========================================

const deleteItem = async (id) => {

    await prisma.homepageSectionItem.delete({

        where: {

            id,

        },

    });

};

module.exports = {

    createSection,
    getHomepage,

    getSections,
    getSectionById,

    updateSection,
    deleteSection,

    createItem,
    updateItem,
    deleteItem,

};