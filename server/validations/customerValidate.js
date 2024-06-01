const Joi = require("joi");
///^\+20(1[0125]\d{8}|[23]\d{7})$/
///^01[0-2,5]{1}[0-9]{8}$/
const customerSchema = Joi.object({
  name: Joi.string(),
  phone: Joi.string()
    .pattern(/^\+20(1[0125]\d{8}|[23]\d{7})$/)
    .required(),
});

module.exports = customerSchema;
