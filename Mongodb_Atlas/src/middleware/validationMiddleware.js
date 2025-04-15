import {body} from "express-validator";

const validateCreateUser = [
  body('name').notEmpty().withMessage('Name is required'),

  body('email').isEmail().withMessage('Invalid email format'),

  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/[A-Z]/)
    .withMessage('Password must contain an uppercase letter')
    .matches(/[a-z]/)
    .withMessage('Password must contain a lowercase letter')
    .matches(/\d/)
    .withMessage('Password must contain a number')
    .matches(/[@$!%*?&]/)
    .withMessage('Password must contain a special character')
]

export default validateCreateUser
