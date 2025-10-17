//trae todos los productos
const getAllproducts = (req, res) => {
  res.send("All products");
};

//trae productos por id
const getIdProducts = (req, res) => {
  const { id } = req.params;
  res.send(`Products by ID: ${id}`);
};

const createProduct = (req, res) => {
  const { name } = req.body;
  res.send(`Edit product: ${name}`);
};

const editProduct = (req, res) => {
  res.send(`Edit product`);
};

const deleteProduct = (req, res) => {
  res.send("Delete product");
};

export { getAllproducts, getIdProducts, createProduct, editProduct, deleteProduct };
