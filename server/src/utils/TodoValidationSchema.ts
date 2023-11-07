import { check } from "express-validator";

const TodoValidationSchema = [
    check("title", "Title is required").exists()
    .trim().isLength({ min: 3 }).withMessage("Title must be a minimum of 3 characters"),

    check("desc", "Description is required").exists()
    .trim().isLength({ min: 6 }).withMessage("Description must be a minimum of 6 characters"),

    check("dueDate", "Due Date is required").exists(),

    check("todoType", "Todo Type is required").exists(),

];

const TodoUpdateSchema = [...TodoValidationSchema, 
    check("todoId", "Todo Id is required").exists()
];

const DeleteTodoSchema = [
    check("todoId", "Todo Id is required").exists()
]

export { TodoValidationSchema, TodoUpdateSchema, DeleteTodoSchema };