import express from "express";
import { validationResult } from 'express-validator';
import { User } from "../models/User";
import bcrypt from "bcrypt";

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
        return res.status(200).json({msg:"user successfully created",user});

    } catch (err) {
        return res.status(400).send(err);
    }

}

export { RegisterController };