import {
  allProductsControllers,
  productByNameControllers,
  productByIdControllers,
  createProductControllers,
  editProductControllers,
  deleteProductControllers,
} from "../controllers/productControllers.js";

//trae todos los productos
const getAllProducts = (req, res) => {
  try {
    const { article } = req.query;
    if (!article) {
      const response = allProductsControllers();
      res.send(response);
    } else {
      const response = productByNameControllers(article);
      res.send(response);
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

//trae productos por id
const getProductById = (req, res) => {
  try {
    const { id } = req.params;
    const response = productByIdControllers(id);
    res.send(response);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

//crea un producto
const createProduct = (req, res) => {
  try {
    const { article, price } = req.body;
    createProductControllers(article, price);
    res.send(`producto creado con éxito`);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

//edita un producto
const editProduct = (req, res) => {
  try {
    const { id } = req.params;
    const { article, price } = req.body;
    editProductControllers(id, article, price);
    res.send(`producto editado con éxito`);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

//elimina un producto
const deleteProduct = (req, res) => {
  try {
    const { id } = req.params;
    const response = deleteProductControllers(id);
    res.send(response);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

export {
  getAllProducts,
  getProductById,
  createProduct,
  editProduct,
  deleteProduct,
};
