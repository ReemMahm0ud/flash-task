const Joi = require("joi");
const customerSchema = require("./customerValidate");

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
