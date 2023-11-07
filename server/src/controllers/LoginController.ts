import express from "express";

const LoginController = (req: express.Request, res: express.Response) => {
    res.send("Login Page");
}

export { LoginController };