const prisma = require("../config/prisma");

const {
    registerUser,
    loginUser,
} = require("../services/auth.service");

const { generateToken } = require("../utils/jwt");

// ==========================================
// Register User
// ==========================================

const register = async (req, res, next) => {

    try {

        const user = await registerUser(req.body);

        const token = generateToken(user);

        return res.status(201).json({
            success: true,
            message: "Registration successful.",
            token,
            user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
                isVerified: user.isVerified,
            },
        });

    } catch (error) {

    if (error.message === "Invalid email or password.") {
        return res.status(401).json({
            success: false,
            message: error.message,
        });
    }

    next(error);

}

};

// ==========================================
// Login User
// ==========================================

const login = async (req, res, next) => {

    try {

        const user = await loginUser(req.body);

        const token = generateToken(user);

        return res.status(200).json({
            success: true,
            message: "Login successful.",
            token,
            user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
                isVerified: user.isVerified,
            },
        });

    } catch (error) {

        next(error);

    }

};

// ==========================================
// Get Logged-in User
// ==========================================

const getMe = async (req, res, next) => {

    try {

        const user = await prisma.user.findUnique({

            where: {
                id: req.user.id,
            },

            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                phone: true,
                role: true,
                isVerified: true,
                createdAt: true,
                updatedAt: true,
            },

        });

        if (!user) {

            return res.status(404).json({
                success: false,
                message: "User not found.",
            });

        }

        return res.status(200).json({
            success: true,
            user,
        });

    } catch (error) {

        next(error);

    }

};

module.exports = {
    register,
    login,
    getMe,
};