//trae todos los usuarios
const getAllUsers = (req, res) => {
  res.send("All users");
};

//trae usuario por id
const getIdUser = (req, res) => {
  const { id } = req.params;
  res.send(`User by ID: ${id}`);
};

export { getAllUsers, getIdUser };
