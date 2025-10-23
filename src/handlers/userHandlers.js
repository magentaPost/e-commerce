import {
  createUserControllers,
  readUsersControllers,
  editUserControllers,
  userByIdControllers,
  deleteUserControllers,
} from "../controllers/userControllers.js";
import users from "../db/dataBases.js";

//trae todos los usuarios
const getAllUsers = (req, res) => {
  try {
    const allUsers = readUsersControllers();
    res.json(allUsers);
  } catch {
    res.status(500).send("Error al obtener los usuarios");
  }
};

//trae usuario por id
const getIdUser = (req, res) => {
  const { id } = req.params;
  try {
    userByIdControllers(id);
    const { name, userName } = userByIdControllers(id);
    res.send(`User: ${id} - ${name} - ${userName}`);
  } catch (error) {
    res.status(404).send(error.message);
}};

const createUser = (req, res) => {
  const { name, userName } = req.body;
  createUserControllers(name, userName);
  res.send(`${name} - ${userName}`);
};

const editUser = (req, res) => {
  const { id } = req.params;
  editUserControllers(id);
  const { name, userName } = editUserControllers(id);
  res.send(`Edit user: ${id} - ${name} - ${userName}`);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  deleteUserControllers(id);
  const { name, userName } = deleteUserControllers(id);
  res.send(`Delete: ${name} ${userName}`);
};

export { getAllUsers, getIdUser, createUser, editUser, deleteUser };
