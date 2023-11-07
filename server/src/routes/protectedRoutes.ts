import { UserController } from "../controllers/UserController";
import express from "express";

const router = express.Router();

router.get("/", UserController)

export { router as ProtectedRoute };