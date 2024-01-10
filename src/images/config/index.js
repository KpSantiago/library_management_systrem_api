const multer = require('multer');

module.exports = multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, './src/images/uploads')
        },
        filename: (req, file, callback) => {
            const image = file.originalname;
            const randomPrefix = require('crypto').randomBytes(8).toString('hex');

            callback(null, `${randomPrefix}${image}`)
        },
        filelimits: {
            file: 1,
        },
        fileFilter: (req, file, callback) => {
            if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg' || file.mimetype == 'image/png') {
                return true
            } else {
                return false
            }
        }
    })
})