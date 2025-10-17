import { Router } from "express";
import {
  getAllproducts,
  getIdProducts,
  createProduct,
  editProduct,
  deleteProduct,
} from "../handlers/productsHandlers.js";

const productsRouter = Router();

// Ruta products
//Get
productsRouter.get("/products", getAllproducts);
productsRouter.get("/products/:id", getIdProducts);

//Post
productsRouter.post("/products", createProduct);

//Put
productsRouter.put("/products", editProduct);

//Delete
productsRouter.delete("/products", deleteProduct);

export default productsRouter;
