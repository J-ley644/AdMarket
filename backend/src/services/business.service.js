const prisma = require("../config/prisma");

// ==========================================
// Create Business
// ==========================================

const createBusiness = async (businessData, ownerId) => {

    const business = await prisma.business.create({

        data: {

            name: businessData.name.trim(),

            description: businessData.description || null,

            logo: businessData.logo || null,

            coverImage: businessData.coverImage || null,

            email: businessData.email || null,

            phone: businessData.phone || null,

            website: businessData.website || null,

            country: businessData.country || null,

            county: businessData.county || null,

            city: businessData.city || null,

            address: businessData.address || null,

            ownerId,

        },

    });

    return business;

};

// ==========================================
// Get All Businesses
// ==========================================

const getBusinesses = async () => {

    return await prisma.business.findMany({

        include: {

            owner: {

                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true,
                },

            },

        },

        orderBy: {
            createdAt: "desc",
        },

    });

};

// ==========================================
// Get Business By ID
// ==========================================

const getBusinessById = async (id) => {

    return await prisma.business.findUnique({

        where: { id },

        include: {

            owner: {

                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true,
                },

            },

        },

    });

};

// ==========================================
// Update Business
// ==========================================

const updateBusiness = async (id, data, user) => {

    const business = await prisma.business.findUnique({

        where: { id }

    });

    if (!business) {

        throw new Error("Business not found.");

    }

    if (
        user.role !== "ADMIN" &&
        business.ownerId !== user.id
    ) {

        throw new Error("You are not allowed to update this business.");

    }

    return await prisma.business.update({

        where: { id },

        data,

    });

};

// ==========================================
// Delete Business
// ==========================================

const deleteBusiness = async (id, user) => {

    const business = await prisma.business.findUnique({

        where: { id }

    });

    if (!business) {

        throw new Error("Business not found.");

    }

    if (
        user.role !== "ADMIN" &&
        business.ownerId !== user.id
    ) {

        throw new Error("You are not allowed to delete this business.");

    }

    return await prisma.business.delete({

        where: { id }

    });

};

module.exports = {

    createBusiness,
    getBusinesses,
    getBusinessById,
    updateBusiness,
    deleteBusiness,

};