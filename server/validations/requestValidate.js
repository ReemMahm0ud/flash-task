const Joi = require("joi");
const customerSchema = require("./customerValidate");
///^\+20(1[0125]\d{8}|[23]\d{7})$/
///^01[0-2,5]{1}[0-9]{8}$/

// Define the schema
const payloadSchema = Joi.object({
  integrationId: Joi.number().integer(),
  aggregatorOrderId: Joi.string().required(),
  customer: customerSchema.required(),
  amountCents: Joi.number().integer().required(),
  currency: Joi.string().required(),
  description: Joi.string().optional(),
});

module.exports = payloadSchema;
