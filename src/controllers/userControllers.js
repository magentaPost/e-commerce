import data from "../db/dataBases.js";

const users = data.users;

export const allUsersControllers = () => {
  if (users.length === 0) {
    throw new Error("No hay usuarios disponibles");
  }
  const allUsers = users.map((user) => {
    return user;
  });
  return allUsers;
};

export const userByNameControllers = (name) => {
  const user = users.filter(
    (user) => user.name.toLowerCase() === name.toLowerCase()
  );
  if (user.length === 0) {
    throw new Error("No se encontró el usuario");
  }
  return user;
};

export const userByIdControllers = (id) => {
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    throw new Error("No se encontró el usuario");
  }

  return user;
};

export const editUserControllers = (id, name, userName) => {
  const newUser = { id, name, userName };
  const user = users.find((user) => user.id === parseInt(id));
  if (user !== -1) {
    Object.assign(user, newUser);
  }
  return user;
};

export const deleteUserControllers = (id) => {
  const index = users.findIndex((user) => user.id === parseInt(id));
  let deleteUser;
  if (index !== -1) {
    [deleteUser] = users.splice(index, 1);
  } else {
    throw new Error("Usuario no encontrado");
  }
  return deleteUser;
};
