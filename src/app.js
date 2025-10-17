import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import mainRouter from "./routes/mainRoute.js";
import userRouter from "./routes/userRoutes.js";
import productsRouter from "./routes/productsRoutes.js";

const app = express();

//Middlewares
dotenv.config({ quiet: true });
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/", mainRouter);
app.use("/api", userRouter);
app.use("/api", productsRouter);

export default app;
