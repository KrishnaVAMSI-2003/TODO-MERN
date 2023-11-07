import express from "express";
import jwt from "jsonwebtoken";
import { SECRET_TOKEN } from "../utils/constants";
import { CustomRequest } from "../utils/constants";
import { User } from "../models/User";

const AuthMiddleware = async(req: CustomRequest, res: express.Response, next: express.NextFunction) => {
    const token = req.header("x-auth-token");
    if(!token) return res.status(401).json({ errors: [{ msg: "No token, authorization denied" }] });

    try{

        const decoded = jwt.verify(token, SECRET_TOKEN);
        if(typeof decoded === "string") throw new Error("Invalid Token");

        const user = User.findById(decoded.id);
        if(!user) throw new Error("User not found");

        req.userId = decoded.id;
        
        next();

    } catch (err) {
        res.status(400).json({ errors: [{ msg: "Token is not valid" }] });
    }
};

export { AuthMiddleware };