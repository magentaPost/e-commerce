import { Router } from "express";
import { createUser } from "../handlers/authHandler.js";

const authRouter = Router();

authRouter.post("/register", createUser);

export default authRouter;
