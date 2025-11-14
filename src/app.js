import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import mainRouter from "./routes/mainRoute.js";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoute.js";
import productsRouter from "./routes/productsRoutes.js";
import pageNotFoundHandler from "./handlers/pageNoFound.js";

const app = express();

//Middlewares
dotenv.config({ quiet: true });
app.use(morgan("dev"));
app.use(express.json());

//Ruta raiz
app.use("/", mainRouter);

//Rutas de autenticación
app.use("/auth", authRouter);

//Rutas de usuarios
app.use("/api", userRouter);

//Rutas de productos
app.use("/api", productsRouter);

//Página de error 404
app.use(pageNotFoundHandler)

export default app;
