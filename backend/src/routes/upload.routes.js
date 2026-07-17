const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload.middleware");
const protect = require("../middleware/auth.middleware");
const uploadController = require("../controllers/upload.controller");

router.post(
    "/image",
    protect,
    upload.single("image"),
    uploadController.uploadImage
);

module.exports = router;