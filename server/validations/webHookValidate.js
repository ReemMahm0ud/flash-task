const Joi = require("joi");
const orderSchema = require("./orderValidate");

// Define the schema
const transactionSchema = Joi.object({
  transactionId: Joi.string().required(),
  aggregatorOrderId: Joi.string().required(),
  order: orderSchema.required(),
  status: Joi.string().required(),
  createdAt: Joi.string().required(),
  additionalData: Joi.object().optional(),
});

module.exports = transactionSchema;
