import express from "express";
import mongoose from "mongoose";

interface CustomRequest extends express.Request {
    userId: mongoose.Types.ObjectId;
}

const PORT = process.env.PORT || 8080;

const MONGO_URI = process.env.MONGO_URI || "<your-mongo-uri>";

const SECRET_TOKEN = process.env.SECRET_TOKEN || "kjhfajhfkabvkfjvbirbvireubvi";

export { PORT, MONGO_URI, SECRET_TOKEN, CustomRequest };