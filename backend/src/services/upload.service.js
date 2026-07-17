const uploadService = {
    processUpload(file) {
        if (!file) {
            throw new Error("No file uploaded");
        }

        return {
            url: file.path,
            publicId: file.filename,
            format: file.mimetype
        };
    }
};

module.exports = uploadService;