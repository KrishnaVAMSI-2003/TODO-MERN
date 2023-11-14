import express from "express";
import { GetUser } from "../controllers/UserController";
import { alltodos, addTodo, updateTodo, deleteTodo } from "../controllers/TodoController";
import { TodoValidationSchema } from "../utils/TodoValidationSchema";

const router = express.Router();

router.get("/", GetUser);

router.get("/alltodos", alltodos);
router.post("/addtodo", TodoValidationSchema, addTodo);
router.put("/updatetodo", updateTodo);
router.delete("/deletetodo/:id", deleteTodo);

export { router as ProtectedRoute };