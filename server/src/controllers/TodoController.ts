import express from "express";
import { validationResult } from "express-validator";
import { User } from "../models/User";
import { Todo } from "../models/Todo";
import { CustomRequest } from "../utils/constants";

const alltodos = async(req: CustomRequest, res: express.Response) => {

    if(!req.userId) return res.status(400).json({ errors: [{ msg: "Unauthorized access" }] });
    
    try {
        const user = await User.findById(req.userId).select("-password").populate("todos");
        if(!user) return res.status(400).json({ errors: [{ msg: "User not found" }] });
        res.status(200).json({msg:"user and todos successfully fetched", user});
    } catch (err) {
        res.status(400).json({ errors: [{ msg: "Error fetching todos" }] })
    }

}

const addTodo = async(req: CustomRequest, res: express.Response) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try{
        const user = await User.findById(req.userId).select("-password");
        if(!user) return res.status(400).json({ errors: [{ msg: "User not found" }] });

        const { title, desc, dueDate, todoType } = req.body;
        const todo = await Todo.create({ title, desc, dueDate, todoType, userId: req.userId });

        user.todos.push(todo._id);
        user.save();

        return res.status(200).json({msg:"todo successfully added", todo});
    } catch (err) {
        res.status(400).json({ errors: [{ msg: "Error adding todo" }] })
    }
}


const updateTodo = async(req: CustomRequest, res: express.Response) => {
    
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try{
        const todo = await Todo.findById(req.body._id);
        if(todo.userId != req.userId) return res.status(400).json({ errors: [{ msg: "Not authorized to update this todo" }] });

        todo.title = req.body.title;
        todo.desc = req.body.desc;
        todo.dueDate = req.body.dueDate;
        todo.todoType = req.body.todoType;
        todo.isCompleted = req.body.isCompleted;

        todo.save();
        
        return res.status(200).json({msg:"todo successfully updated", todo});

    } catch (err) {
        res.status(400).json({ errors: [{ msg: "Error updating todo" }] })
    }
}

const deleteTodo = async(req: CustomRequest, res: express.Response) => {
    const id = req.params.id;
    if(!id) return res.status(400).json({ errors: [{ msg: "Todo id not provided" }] });

    try {
        const user = await User.findById(req.userId).select("-password");
        if(!user) return res.status(400).json({ errors: [{ msg: "Unauthorized access" }] });

        const todo = await Todo.findByIdAndDelete(id);
        if(!todo) return res.status(400).json({ errors: [{ msg: "Todo not found" }] });

        const index = user.todos.indexOf(todo._id);
        if(index > -1) user.todos.splice(index, 1);
        user.save();
        
        return res.status(200).json({msg:"todo successfully deleted", todo});
    } catch (err) {
        res.status(400).json({ errors: [{ msg: "Error deleting todo" }] })
    }
}

export { alltodos, addTodo, updateTodo, deleteTodo };