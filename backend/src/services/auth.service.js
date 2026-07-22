const bcrypt = require("bcrypt");
const prisma = require("../config/prisma");

// ==========================================
// Register User
// ==========================================

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
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: normalizedEmail,
            passwordHash,
            phone: phone ? phone.trim() : null,
        },

    });

    return user;

};

// ==========================================
// Login User
// ==========================================

const loginUser = async (loginData) => {

    console.log("================================");
    console.log("LOGIN DATA:", loginData);

    const {
        email,
        password,
    } = loginData;

    console.log("EMAIL:", email);
    console.log("PASSWORD:", password);

    const normalizedEmail = email.toLowerCase().trim();

    const user = await prisma.user.findUnique({

        where: {
            email: normalizedEmail,
        },

    });

    console.log("USER FOUND:", user ? "YES" : "NO");

    if (!user) {

        throw new Error("Invalid email or password.");

    }

    const passwordMatches = await bcrypt.compare(
        password,
        user.passwordHash
    );

    console.log("PASSWORD MATCH:", passwordMatches);

    if (!passwordMatches) {

        throw new Error("Invalid email or password.");

    }

    return user;

};

module.exports = {
    registerUser,
    loginUser,
};