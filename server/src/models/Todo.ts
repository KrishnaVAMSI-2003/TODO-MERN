import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
        length: { min: 3 },
    },
    desc: {
        type: String,
        required: true,
        trim: true,
        length: { min: 6 },
    },
    dueDate: {
        type: String,  //temporarily storing it as a string
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    todoType: {
        type: String,
        required: true,
        trim: true
    },
})

const Todo = mongoose.model("Todo", TodoSchema);

export { Todo };