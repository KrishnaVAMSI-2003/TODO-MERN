import express from "express";
import { RegisterController } from "../controllers/RegisterController";
import { LoginController } from "../controllers/LoginController";
import { RegisterSchema, LoginSchema } from "../utils/authValidationSchema";

const router = express.Router();

router.post("/register", RegisterSchema, RegisterController);
router.post("/login", LoginSchema, LoginController);

export { router as AuthRoute };