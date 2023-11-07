import express from "express";
import { RegisterController } from "../controllers/RegisterController";
import { LoginController } from "../controllers/LoginController";

const router = express.Router();

router.post("/register", RegisterController);
router.post("/login", LoginController);

export { router as AuthRoute };