import { registerControllers } from "../controllers/registerController.js";
import userSchema from "../schemas/userSchema.js";

//crea un usuario
const createUser = (req, res) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    res.status(404).send(error.details[0].message);
  } else {
    try {
      const { name, userName, email, password } = req.body;
      registerControllers(name, userName, email, password);
      res.send(`Usuario registrado con éxito`);
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
  }
};

export { createUser };
