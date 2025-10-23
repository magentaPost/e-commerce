import users from "../db/dataBases.js";

export const readUsersControllers = () => {
  const AllUsers = users.map((user) => {
    return user;
  });
  console.log(AllUsers);
  return AllUsers;
};

export const userByIdControllers = (id) => {
  const user = users.find((user) => user.id === parseInt(id));
  console.log(user.name);
  return user;
};

export const createUserControllers = (name, userName) => {
  const id = users.length + 1;
  const newUser = { id, name, userName };
  console.log(newUser);
};

export const editUserControllers = (id, name, userName) => {
  const user = users.find((user) => user.id === parseInt(id));
  console.log(user.name);
  return user;
};

export const deleteUserControllers = (id, name, userName) => {
  const user = users.find((user) => user.id === parseInt(id));
  console.log(user.name);
  return user;
};
