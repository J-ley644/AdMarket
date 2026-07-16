const express = require("express");

const {
    register,
    login,
    getMe,
} = require("../controllers/auth.controller");
const protect = require("../middleware/auth.middleware");
const authorize = require("../middleware/role.middleware");
const validate = require("../middleware/validation.middleware");
const {
    registerValidator,
    loginValidator,
} = require("../validators/auth.validator");

const router = express.Router();

router.post(
    "/register",
    registerValidator,
    validate,
    register
);

router.post(
    "/login",
    loginValidator,
    validate,
    login

);

router.get("/me", protect, getMe);

router.get(
    "/admin-test",
    protect,
    authorize("ADMIN"),
    (req, res) => {
        res.json({
            success: true,
            message: "Welcome Admin!",
        });
    }
);

module.exports = router;
