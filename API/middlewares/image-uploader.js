const multer = require("multer");

const HttpError = require("../customclasses/HttpError");

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './uploads'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
})

const imageUploader = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024,
        files: 10
    },
    fileFilter: (req, file, cb) => {
        const allowedTypes = [
            'image/jpeg',
            'image/png',
            'image/jpg'
        ];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new HttpError("Ce type de fichier n'est pas supporté", 400));
        }
    }
});

module.exports = imageUploader;
