const bcrypt = require("bcrypt");
const prisma = require("../config/prisma");

const registerUser = async (userData) => {
    const {
        firstName,
        lastName,
        email,
        password,
        phone,
    } = userData;

    const normalizedEmail = email.toLowerCase().trim();

    const existingUser = await prisma.user.findUnique({
        where: {
            email: normalizedEmail,
        },
    });

    if (existingUser) {
        throw new Error("Email already exists.");
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
        data: {
            firstName,
            lastName,
            email: normalizedEmail,
            passwordHash,
            phone,
        },
    });

    return user;
};

module.exports = {
    registerUser,
};