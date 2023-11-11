import express from "express";
import { validationResult } from 'express-validator';
import { User } from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_TOKEN } from "../utils/constants";

const LoginController = async(req: express.Request, res: express.Response) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;

    try{
        const user = await User.findOne().or([{ email }]);
        if(!user) return res.status(401).json({ errors: [{ msg: "No user found with the given mail" }] });

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(401).json({ errors: [{ msg: "Invalid Password!" }] });

        const token = jwt.sign({id: user._id}, SECRET_TOKEN);

        return res.status(200).json({msg:"user successfully logged in", user, token});

    } catch (err) {
        return res.status(400).send(err.message);
    }

}

export { LoginController };