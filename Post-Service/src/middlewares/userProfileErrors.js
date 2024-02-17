const { body, validationResult } = require('express-validator');

const signupValidation = [
  body('firstName').isLength({ min: 3 }),
  body('email').isEmail(),
  body('password').isLength({min: 8, max:16}),
  
  // Add other validation middleware for the signup route
];

const loginValidation = [
  // Define validation middleware for the login route
];

// Custom function to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorDetails = errors.array().map(error => ({
      field: error.param,
      message: error.msg,
      value: error.value,
    }));

    return res.status(400).json({ errors: errorDetails });
  }

  // Proceed to the next middleware or route handler if validation passes
  next();
};

module.exports = {
  signupValidation,
  loginValidation,
  handleValidationErrors,
};