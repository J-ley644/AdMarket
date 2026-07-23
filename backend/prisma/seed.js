const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {

    console.log("🌱 Seeding AdMarket database...");

    // ==========================================
    // Categories
    // ==========================================

    const categories = [
        {
            name: "Electronics",
            slug: "electronics",
            icon: "💻",
            description: "Electronic devices"
        },
        {
            name: "Fashion",
            slug: "fashion",
            icon: "👕",
            description: "Fashion products"
        },
        {
            name: "Groceries",
            slug: "groceries",
            icon: "🛒",
            description: "Daily groceries"
        },
        {
            name: "Beauty",
            slug: "beauty",
            icon: "💄",
            description: "Beauty products"
        },
        {
            name: "Home",
            slug: "home",
            icon: "🏠",
            description: "Home essentials"
        },
        {
            name: "Gaming",
            slug: "gaming",
            icon: "🎮",
            description: "Gaming products"
        },
        {
            name: "Computers",
            slug: "computers",
            icon: "🖥️",
            description: "Computers and accessories"
        },
        {
            name: "Automotive",
            slug: "automotive",
            icon: "🚗",
            description: "Vehicle accessories"
        }
    ];

    for (const category of categories) {

        await prisma.category.upsert({

            where: {
                slug: category.slug
            },

            update: {},

            create: category

        });

    }

    console.log("✅ Categories seeded");

    // ==========================================
// Demo Business Owner
// ==========================================

const owner = await prisma.user.findFirst({

    where: {

        role: "SELLER"

    }

});

if (!owner) {

    throw new Error(
        "No SELLER account found. Register a seller account first."
    );

}

// ==========================================
// Demo Business
// ==========================================

const business = await prisma.business.upsert({

    where: {

        id: "admarket-demo-business"

    },

    update: {},

    create: {

        id: "admarket-demo-business",

        name: "AdMarket Store",

        description: "Official AdMarket Demo Store",

        email: "store@admarket.com",

        phone: "0712345678",

        country: "Kenya",

        county: "Nairobi",

        city: "Nairobi",

        address: "Westlands",

        website: "https://admarket.test",

        isVerified: true,

        isActive: true,

        ownerId: owner.id

    }

});

console.log("✅ Demo business created");

}

main()
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect();
    });