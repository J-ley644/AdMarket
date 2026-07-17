const prisma = require("../config/prisma");

// ==========================================
// Create Product
// ==========================================

const createProduct = async (data, user) => {

    const business = await prisma.business.findUnique({
        where: {
            id: data.businessId,
        },
    });

    if (!business) {
        throw new Error("Business not found.");
    }

    if (
        user.role !== "ADMIN" &&
        business.ownerId !== user.id
    ) {
        throw new Error(
            "You are not allowed to add products to this business."
        );
    }

    return await prisma.product.create({

        data: {

            name: data.name,
            slug: data.slug,

            shortDescription:
                data.shortDescription || null,

            description:
                data.description || null,

            sku:
                data.sku || null,

            price: data.price,

            discountPrice:
                data.discountPrice || null,

            stock: data.stock,

            thumbnail:
                data.thumbnail || null,

            images:
                data.images || [],

            businessId: data.businessId,

            categoryId: data.categoryId,

        },

    });

};

// ==========================================
// Get All Products
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

// ==========================================
// Get Product By ID
// ==========================================

const getProductById = async (id) => {

    return await prisma.product.findUnique({

        where: {

            id,

        },

        include: {

            business: true,

            category: true,

        },

    });

};

// ==========================================
// Update Product
// ==========================================

const updateProduct = async (

    id,
    data,
    user

) => {

    const product =
        await prisma.product.findUnique({

            where: {

                id,

            },

            include: {

                business: true,

            },

        });

    if (!product) {

        throw new Error("Product not found.");

    }

    if (

        user.role !== "ADMIN" &&
        product.business.ownerId !== user.id

    ) {

        throw new Error(
            "You are not allowed to update this product."
        );

    }

    if (data.businessId) {

        const business =
            await prisma.business.findUnique({

                where: {

                    id: data.businessId,

                },

            });

        if (!business) {

            throw new Error(
                "Business not found."
            );

        }

    }

    return await prisma.product.update({

        where: {

            id,

        },

        data: {

            name: data.name,

            slug: data.slug,

            shortDescription:
                data.shortDescription,

            description:
                data.description,

            sku:
                data.sku,

            price:
                data.price,

            discountPrice:
                data.discountPrice,

            stock:
                data.stock,

            thumbnail:
                data.thumbnail,

            images:
                data.images,

            businessId:
                data.businessId,

            categoryId:
                data.categoryId,

        },

        include: {

            business: true,

            category: true,

        },

    });

};

// ==========================================
// Delete Product
// ==========================================

const deleteProduct = async (

    id,
    user

) => {

    const product =
        await prisma.product.findUnique({

            where: {

                id,

            },

            include: {

                business: true,

            },

        });

    if (!product) {

        throw new Error(
            "Product not found."
        );

    }

    if (

        user.role !== "ADMIN" &&
        product.business.ownerId !== user.id

    ) {

        throw new Error(
            "You are not allowed to delete this product."
        );

    }

    await prisma.product.delete({

        where: {

            id,

        },

    });

    return {

        message:
            "Product deleted successfully.",

    };

};

// ==========================================
// Search Products
// ==========================================

const searchProducts = async (query) => {

    return await prisma.product.findMany({

        where: {

            OR: [

                {
                    name: {
                        contains: query,
                        mode: "insensitive",
                    },
                },

                {
                    shortDescription: {
                        contains: query,
                        mode: "insensitive",
                    },
                },

                {
                    description: {
                        contains: query,
                        mode: "insensitive",
                    },
                },

            ],

        },

        include: {

            business: true,
            category: true,

        },

        orderBy: {

            createdAt: "desc",

        },

    });

};

// ==========================================
// Get Products By Category
// ==========================================

const getProductsByCategory = async (categoryId) => {

    return await prisma.product.findMany({

        where: {

            categoryId,

        },

        include: {

            business: true,
            category: true,

        },

        orderBy: {

            createdAt: "desc",

        },

    });

};

// ==========================================
// Get Products By Business
// ==========================================

const getProductsByBusiness = async (businessId) => {

    return await prisma.product.findMany({

        where: {

            businessId,

        },

        include: {

            business: true,
            category: true,

        },

        orderBy: {

            createdAt: "desc",

        },

    });

};

// ==========================================
// Featured Products
// ==========================================

const getFeaturedProducts = async () => {

    return await prisma.product.findMany({

        take: 8,

        include: {

            business: true,
            category: true,

        },

        orderBy: {

            createdAt: "desc",

        },

    });

};

// ==========================================
// Latest Products
// ==========================================

const getLatestProducts = async () => {

    return await prisma.product.findMany({

        take: 12,

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
    getProductById,
    updateProduct,
    deleteProduct,

    searchProducts,
    getProductsByCategory,
    getProductsByBusiness,

    getFeaturedProducts,
    getLatestProducts,

};