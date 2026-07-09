const { registerUser } = require("../services/auth.service");
const { generateToken } = require("../utils/jwt");

const register = async (req, res, next) => {
    try {
        const user = await registerUser(req.body);

        const token = generateToken(user);

        res.status(201).json({
            success: true,
            message: "Registration successful.",
            token,
            user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    register,
};