const Joi = require("joi");

//define the schema
const customerSchema = Joi.object({
  name: Joi.string(),
  phone: Joi.string()
    .pattern(/^\+20(1[0125]\d{8}|[23]\d{7})$/)
    .required(),
});

module.exports = customerSchema;
