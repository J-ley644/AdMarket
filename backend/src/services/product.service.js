const prisma = require("../config/prisma");

// ==========================================
// Create Product
// ==========================================

const createProduct = async (data, user) => {

    // Verify business exists
    const business = await prisma.business.findUnique({
        where: {
            id: data.businessId,
        },
    });

    if (!business) {
        throw new Error("Business not found.");
    }

    // Seller can only create products for their own business
    if (
        user.role !== "ADMIN" &&
        business.ownerId !== user.id
    ) {
        throw new Error("You are not allowed to add products to this business.");
    }

    return await prisma.product.create({

        data: {

            name: data.name,
            slug: data.slug,
            shortDescription: data.shortDescription || null,
            description: data.description || null,

            sku: data.sku || null,

            price: data.price,
            discountPrice: data.discountPrice || null,

            stock: data.stock,

            thumbnail: data.thumbnail || null,
            images: data.images || [],

            businessId: data.businessId,
            categoryId: data.categoryId,

        },

    });

};

// ==========================================
// Get Products
// ==========================================

const getProducts = async () => {

    return await prisma.product.findMany({

        include: {
            business: true,
            category: true,
        },

        orderBy: {
            createdAt: "desc",
        },

    });

};

module.exports = {

    createProduct,
    getProducts,

};