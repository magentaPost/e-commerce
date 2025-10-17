import express from "express";

const app = express();

app.get("/", (res, req) => {
  req.send("Hello World");
});

export default app;
