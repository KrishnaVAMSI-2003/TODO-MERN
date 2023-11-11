import express from "express";
import { validationResult } from 'express-validator';
import { User } from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_TOKEN } from "../utils/constants";

const RegisterController = async(req: express.Request, res: express.Response) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { username, email, password } = req.body;
    try{
        const userExists = await User.findOne().or([{ username }, { email }]);
        if(userExists) return res.status(400).json({ errors: [{ msg: "Username or Email already exists" }] });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        
        const user = await User.create({ username, email, password: hashedPassword });
        const token = jwt.sign({id: user._id}, SECRET_TOKEN);

        return res.status(200).json({msg:"user successfully created",user, token});

    } catch (err) {
        return res.status(400).send(err);
    }
    
}

export { RegisterController };