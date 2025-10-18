//trae todos los usuarios
const getAllUsers = (req, res) => {
  res.send("All users");
};

//trae usuario por id
const getIdUser = (req, res) => {
  const { id } = req.params;
  res.send(`User by ID: ${id}`);
};

const createUser = (req, res) => {
  const { name } = req.body;
  res.send(`Create user: ${name}`);
};

const editUser = (req, res) => {
  const { id } = req.params;
  res.send(`Edit user: ${id}`);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  res.send(`delete user: ${id}`);
};
export { getAllUsers, getIdUser, createUser, editUser, deleteUser };
