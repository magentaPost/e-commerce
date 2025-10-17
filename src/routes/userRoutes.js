import { Router } from "express";

const userRouter = Router();

// Ruta users
userRouter.get("/users", (req, res) => {
  res.send("All users");
});

export default userRouter;