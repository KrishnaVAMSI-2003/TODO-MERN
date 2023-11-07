import express from "express";
import { GetUser } from "../controllers/UserController";
import { alltodos, addTodo, updateTodo, deleteTodo } from "../controllers/TodoController";
import { TodoValidationSchema, TodoUpdateSchema } from "../utils/TodoValidationSchema";

const router = express.Router();

router.get("/", GetUser);

router.get("/alltodos", alltodos);
router.post("/addtodo", TodoValidationSchema, addTodo);
router.put("/updatetodo", TodoUpdateSchema, updateTodo);
router.delete("/deletetodo", deleteTodo);

export { router as ProtectedRoute };