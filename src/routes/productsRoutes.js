import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  editProduct,
  deleteProduct,
} from "../handlers/productsHandlers.js";

const productsRouter = Router();

// Ruta products
//Get
productsRouter.get("/products", getAllProducts);
productsRouter.get("/products/:id", getProductById);

//Post
productsRouter.post("/products", createProduct);

//Put
productsRouter.put("/products/:id", editProduct);

//Delete
productsRouter.delete("/products/:id", deleteProduct);

export default productsRouter;
