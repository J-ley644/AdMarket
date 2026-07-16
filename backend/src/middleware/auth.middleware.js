const jwt = require("jsonwebtoken");
const prisma = require("../config/prisma");

const protect = async (req, res, next) => {

    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer ")
    ) {

        token = req.headers.authorization.split(" ")[1];

    }

    if (!token) {

        return res.status(401).json({
            success: false,
            message: "Authentication required. No token provided.",
        });

    }

    try {

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        const user = await prisma.user.findUnique({

            where: {
                id: decoded.id,
            },

            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                role: true,
                isVerified: true,
            },

        });

        if (!user) {

            return res.status(401).json({
                success: false,
                message: "User no longer exists.",
            });

        }

        req.user = user;

        next();

    } catch (error) {

        return res.status(401).json({
            success: false,
            message: "Invalid or expired token.",
        });

    }

};

module.exports = protect;