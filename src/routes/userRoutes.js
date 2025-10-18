import { Router } from "express";
import { createUser, getAllUsers, getIdUser, editUser, deleteUser } from "../handlers/userHandlers.js";

const userRouter = Router();

// Ruta users
//get
userRouter.get("/users", getAllUsers);
userRouter.get("/users/:id", getIdUser);

//Post
userRouter.post("/users", createUser);

//Put
userRouter.put("/users/:id", editUser);

//Delete
userRouter.delete("/users/:id", deleteUser);

export default userRouter;
