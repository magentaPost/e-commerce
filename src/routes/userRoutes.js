import { Router } from "express";
import { getAllUsers, getIdUser } from "../handlers/userHandlers.js";

const userRouter = Router();

// Ruta users
userRouter.get("/users", getAllUsers);
userRouter.get("/users/:id", getIdUser);

export default userRouter;
