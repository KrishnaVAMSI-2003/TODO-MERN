import express from "express";
import { CustomRequest } from "../utils/constants";

const UserController = (req: CustomRequest, res: express.Response) => {
    res.send({id: req.userId});
}

export { UserController };