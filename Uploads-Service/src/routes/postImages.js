const router = require('express').Router();
const uploadMiddleware = require('../middleware/upload');
const { postImageController } = require('../controllers/index');


router.post('/api/image', uploadMiddleware, postImageController.imageUplaod);
router.get('/api/image', (req,res) => {});



module.exports = router;














