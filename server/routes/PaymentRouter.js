const express = require("express");
const paymentRouter = express.Router();
const { initiatePayment } = require("../controllers/PayementController");
const payloadSchema = require("../validations/requestValidate");
const validateMiddleware = require("../middlewares/validateMiddleware");

paymentRouter.post("", validateMiddleware(payloadSchema), initiatePayment);
module.exports = paymentRouter;
