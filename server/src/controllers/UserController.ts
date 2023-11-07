import express from "express";
import { CustomRequest } from "../utils/constants";
import { User } from "../models/User";

const GetUser = async(req: CustomRequest, res: express.Response) => {

    try {
        
        const user = await User.findById(req.userId).select("-password");
        if(!user) return res.status(400).json({ errors: [{ msg: "User not found" }] });

        return res.status(200).json({msg:"user successfully fetched", user});

    } catch (err) {
        res.status(400).send(err);
    }
}

export { GetUser };