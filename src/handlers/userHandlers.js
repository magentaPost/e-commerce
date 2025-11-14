import {
  allUsersControllers,
  editUserControllers,
  userByNameControllers,
  userByIdControllers,
  deleteUserControllers,
} from "../controllers/userControllers.js";


//trae todos los usuarios y usuario por name
const getAllUsers = (req, res) => {
  try {
    const { name } = req.query;
    if (!name) {
      const response = allUsersControllers();
      res.send(response);
    } else {
      const response = userByNameControllers(name);
      res.send(response);
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

//trae usuario por id
const userById = (req, res) => {
  try {
    const { id } = req.params;
    const response = userByIdControllers(id);
    res.send(response);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

//edita un usuario
const editUser = (req, res) => {
  try {
    const { id } = req.params;
    const { name, userName } = req.body;
    editUserControllers(id, name, userName);
    res.send(`usuario editado con éxito`);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

//elimina un usuario
const deleteUser = (req, res) => {
  try {
    const { id } = req.params;
    const response = deleteUserControllers(id);
    res.send(response);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

export { getAllUsers, userById, editUser, deleteUser };
