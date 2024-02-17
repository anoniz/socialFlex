const router = require('express').Router();
const  { auth } = require('../middlewares/index');
const { signupValidation, handleValidationErrors } = require('../middlewares/index').errorMiddleware;
//const multer = require('multer');
//const sharp = require('sharp');
const { userController } = require('../controllers');

router.post('/api/signup',signupValidation,handleValidationErrors, userController.signup);
router.post('/api/login', userController.login);
router.post('/logout-all',userController.logoutAll); // see later
router.post('/api/logout',userController.logout);
router.post('/me/change-password',auth,userController.changePassword);
router.post('/api/forgot-password',userController.sendForgotPasswordCode);

// get user by email
// router.get('/api/me',userController.getProfileByEmail);
router.get('/confirmation/:token',userController.verifyEmail);
router.get('/forgot-password/:code',userController.recieveForgotPasswordCode) // for getting code from url and verifying that code exists in db.
router.get('/api/me/:id',userController.getProfile);


// Sign Up: POST /api/signup
// Log In: POST /api/login
// Log Out (optional, if you have sessions): POST /api/logout
// Change Password: POST /api/users/:userId/change-password
// Forgot Password (to request a reset link): POST /api/forgot-password
// Reset Password (using a reset token): POST /api/reset-password



module.exports = router;
