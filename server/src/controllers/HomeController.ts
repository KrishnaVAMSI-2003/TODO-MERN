import express from 'express';

const HomeController = (req: express.Request, res: express.Response) => {
    
    res.send("Home Page");
}

export { HomeController };