import express from "express";

interface CustomRequest extends express.Request {
    userId: string;
}

const PORT = process.env.PORT || 8080;

const MONGO_URI = process.env.MONGO_URI || "<MongoDB url>";

const SECRET_TOKEN = process.env.SECRET_TOKEN || "kjhfajhfkabvkfjvbirbvireubvi";

export { PORT, MONGO_URI, SECRET_TOKEN, CustomRequest };