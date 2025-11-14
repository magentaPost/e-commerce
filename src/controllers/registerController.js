import data from "../db/dataBases.js";
import bcrypt from "bcryptjs";

const users = data.users;

export const registerControllers = async (name, userName, email, password) => {
  const id = users.length + 1;
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = { id, name, userName, email, password : hashPassword };
  users.push(newUser);
  return newUser;
};