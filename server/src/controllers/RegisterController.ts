import express from "express";

const RegisterController = (req: express.Request, res: express.Response) => {
    res.send("Register Page");
}

export { RegisterController };