import { check } from "express-validator"

const RegisterSchema = [

    check("username", "Username is required").exists()
    .isAlphanumeric().withMessage("Username must be alphanumeric")
    .trim().isLength({ min: 3, max: 20 }).withMessage("Username must be between 3 and 20 characters"),

    check("email", "Email is required").exists()
    .trim().isEmail().withMessage("Email must be valid email address"),

    check("password", "Password is required").exists()
    .trim().isLength({ min: 6 }).withMessage("Password must be a minimum of 6 characters")

]

const LoginSchema = [

    check("email", "Email is required").exists()
    .trim().isEmail().withMessage("Email must be valid email address"),

    check("password", "Password is required").exists()
    .trim().isLength({ min: 6 }).withMessage("Password must be a minimum of 6 characters")

]

export { RegisterSchema, LoginSchema }