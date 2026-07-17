const uploadService = require("../services/upload.service");

const uploadController = {
    uploadImage: async (req, res, next) => {
        try {
            const result = uploadService.processUpload(req.file);

            res.status(200).json({
                success: true,
                message: "Image uploaded successfully",
                data: result
            });

        } catch (error) {
            next(error);
        }
    }
};

module.exports = uploadController;