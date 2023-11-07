import express from "express";
import { validationResult } from 'express-validator';

const LoginController = (req: express.Request, res: express.Response) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    res.status(200).send(req.body);
}

export { LoginController };