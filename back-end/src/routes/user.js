const router = require('express').Router();
const  { auth } = require('../middlewares/index');
//const multer = require('multer');
//const sharp = require('sharp');
const { userController } = require('../controllers');

router.post('/api/signup', userController.signup);
router.post('/api/login',auth, userController.login);
router.post('/logout-all',userController.logoutAll); // see later
router.post('/api/logout',userController.logout);
router.post('/me/change-password',auth,userController.changePassword);
router.post('/api/forgot-password',userController.sendForgotPasswordCode);


router.get('/confirmation/:token',userController.verifyEmail);
router.get('/forgot-password/:code',userController.recieveForgotPasswordCode) // for getting code from url and verifying that code exists in db.
// router.get('/me/:id',userController.getProfile);
router.get('/:id',);
// router.get('/me/avatar/:id',userController.getAvatar);
router.patch('/me',);
router.delete('/me',);

// Sign Up: POST /api/signup
// Log In: POST /api/login
// Log Out (optional, if you have sessions): POST /api/logout
// Change Password: POST /api/users/:userId/change-password
// Forgot Password (to request a reset link): POST /api/forgot-password
// Reset Password (using a reset token): POST /api/reset-password



module.exports = router;
