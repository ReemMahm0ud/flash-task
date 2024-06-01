const Joi = require("joi");
const customerSchema = require("./customerValidate");
//order schema
const orderSchema = Joi.object({
  id: Joi.string().required(),
  description: Joi.string().optional(),
  customer: customerSchema.required(),
  amountCents: Joi.number().required(),
  currency: Joi.string().required(),
  paymentLink: Joi.string().required(),
  createdAt: Joi.string().optional(),
});

module.exports = orderSchema;
