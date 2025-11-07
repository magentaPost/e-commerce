import data from "../db/dataBases.js";

const products = data.products;

export const allProductsControllers = () => {
  if (products.length === 0) {
    throw new Error("No hay productos disponibles");
  }
  const allProducts = products.map((product) => {
    return product;
  });
  return allProducts;
};

export const productByNameControllers = (article) => {
  const product = products.filter(
    (product) => product.article.toLowerCase() === article.toLowerCase()
  );
  if (products.length === 0) {
    throw new Error("No se encontró el producto");
  }
  return product;
};

export const productByIdControllers = (id) => {
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    throw new Error("No se encontró el producto");
  }

  return product;
};

export const createProductControllers = (article, price) => {
  const id = products.length + 1;
  const newProduct = { id, article, price };
  products.push(newProduct);
  return newProduct;
};

export const editProductControllers = (id, article, price) => {
  const newProduct = { id, article, price };
  const product = products.find((product) => product.id === parseInt(id));
  if (product !== -1) {
    Object.assign(product, newProduct);
  }
  return product;
};

export const deleteProductControllers = (id) => {
  const index = products.findIndex((product) => product.id === parseInt(id));
  let deleteProduct;
  if (index !== -1) {
    [deleteProduct] = products.splice(index, 1);
  } else {
    throw new Error("Producto no encontrado");
  }
  return deleteProduct;
};
