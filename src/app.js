import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

const app = express();

//Middlewares
dotenv.config({ quiet: true });
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (res, req) => {
  req.send("Hello World");
});

export default app;
