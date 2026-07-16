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

        orderBy: {
            displayOrder: "asc",
        },

    });

};

module.exports = {

    createSection,
    getHomepage,

};