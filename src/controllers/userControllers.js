import users from "../db/dataBases.js";

export const allUsersControllers = () => {
  const allUsers = users.map((user) => {
    return user;
  });
  return allUsers;
};

export const userByNameControllers = (name) => {
  const user = users.filter(
    (user) => user.name.toLowerCase() === name.toLowerCase()
  );
  return user;
};

export const userByIdControllers = (id) => {
  const user = users.find((user) => user.id === parseInt(id));
  return user;
};

export const createUserControllers = (name, userName) => {
  const id = users.length + 1;
  const newUser = { id, name, userName };
  users.push(newUser);
  return newUser;
};

export const editUserControllers = (id, name, userName) => {
  const newUser = { id, name, userName };
  const user = users.find((user) => user.id === parseInt(id));
  if (user !== -1) {
    Object.assign(user, newUser);
  }
  return user
};

export const deleteUserControllers = (id, name, userName) => {
  const index = users.findIndex((user) => user.id === parseInt(id));
  let deleteUser;
  if (index !== -1) {
    [deleteUser] = users.splice(index, 1);
  }
  return deleteUser;
};
