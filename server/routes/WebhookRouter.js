const express = require("express");
const webhookRouter = express.Router();
const {
  paymentTransactionWebhook,
} = require("../controllers/webHookController");
const transactionSchema = require("../validations/webHookValidate");
const validateMiddleware = require("../middlewares/validateMiddleware");

webhookRouter.post(
  "/transaction-callback",
  validateMiddleware(transactionSchema),
  paymentTransactionWebhook
);

module.exports = webhookRouter;
