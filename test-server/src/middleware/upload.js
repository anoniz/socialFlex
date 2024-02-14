const multer = require('multer');


// Custom Multer middleware for handling file uploads with extension validation
const uploadMiddleware = (req, res, next) => {
    const storage = multer.memoryStorage();
    const allowedExtensions = /\.(jpg|jpeg|png|gif)$/; // Regex for allowed image extensions
  
    const upload = multer({
      storage: storage,
      limits: { fileSize: 5 * 1024 * 1024, files: 5 }, // 5 files, each up to 5 MB
      fileFilter: (req, file, cb) => {
        // Extract the file extension from the originalname
        const fileExtension = file.originalname.match(/\.(jpg|jpeg|png|gif)$/i);
  
        // Check if the file has a valid extension
        if (fileExtension && allowedExtensions.test(fileExtension[0])) {
          cb(null, true);
        } else {
          cb(new Error('Invalid file type. Only images with extensions jpg, jpeg, png, or gif are allowed.'));
        }
      },
    }).array('files', 5);
  
    upload(req, res, (err) => {
      if (err) {
        console.error('Multer error:', err);
        if (err.message.startsWith('Invalid file type')) {
          return res.status(400).send(err.message);
        }
        return res.status(500).send('Internal Server Error');
      }
  
      next();
    });
  };


module.exports = uploadMiddleware;


