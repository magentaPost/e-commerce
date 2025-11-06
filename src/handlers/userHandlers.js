import {
  createUserControllers,
  allUsersControllers,
  editUserControllers,
  userByNameControllers,
  userByIdControllers,
  deleteUserControllers,
} from "../controllers/userControllers.js";

//trae todos los usuarios y usuario por name
const getAllUsers = (req, res) => {
  const { name } = req.query;
  if (name) {
    const response = userByNameControllers(name);
    res.send(response);
  } else {
    const response = allUsersControllers();
    res.send(response);
  }
};

//trae usuario por id
const userById = (req, res) => {
  const { id } = req.params;
  const response = userByIdControllers(id);
  res.send(response);
};

//crea un usuario
const createUser = (req, res) => {
  const { name, userName } = req.body;
  createUserControllers(name, userName);
  res.send(`usuario creado con éxito`);
};

//edita un usuario
const editUser = (req, res) => {
  const { id } = req.params;
  const { name, userName } = req.body;
  editUserControllers(id, name, userName);
  res.send(`usuario editado con éxito`);
};

//elimina un usuario
const deleteUser = (req, res) => {
  const { id } = req.params;
  const response = deleteUserControllers(id);
  res.send(response);
};

export { getAllUsers, createUser, userById, editUser, deleteUser };
