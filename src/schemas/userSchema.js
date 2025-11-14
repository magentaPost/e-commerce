import joi from "joi";

const userSchema = joi.object({
  name: joi.string().min(4).required(),
  userName: joi.string().min(4).required(),
  email: joi.string().email().required(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  repeat_password: joi
    .any()
    .valid(joi.ref("password"))
    .required()
    .messages({ "any.only": "Las contraseñas no coinciden" })
    .strip(),
});

export default userSchema;
