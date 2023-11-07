import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true, 
        length: { min: 3 },
    },
    username: {
        type: String,
        required: true,
        trim: true,
        length: { min: 3, max: 20 },
    },
    email: {
        type: String,
        required: true,
        trim: true,
        length: { min: 6 },
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    todos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Todo"
    }],
    Date: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model("User", UserSchema)

export { User }