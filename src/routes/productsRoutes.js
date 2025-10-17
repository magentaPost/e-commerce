import { Router } from "express";

const productsRouter = Router();

// Ruta products
productsRouter.get("/products", (req, res) => {
  res.send("All products");
});

export default productsRouter;
