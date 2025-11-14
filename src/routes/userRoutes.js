import { Router } from "express";
import { getAllUsers, userById, editUser, deleteUser } from "../handlers/userHandlers.js";

const userRouter = Router();

// Ruta users
//get
userRouter.get("/users", getAllUsers);
userRouter.get("/users/:id", userById);

//Put
userRouter.put("/users/:id", editUser);

//Delete
userRouter.delete("/users/:id", deleteUser);

export default userRouter;
