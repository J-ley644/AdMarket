const express = require("express");

const { register } = require("../controllers/auth.controller");
const validate = require("../middleware/validation.middleware");
const { registerValidator } = require("../validators/auth.validator");

const router = express.Router();

router.post(
    "/register",
    registerValidator,
    validate,
    register
);

module.exports = router;