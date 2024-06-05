const express = require("express");
const paymentRouter = express.Router();
const { initiatePayment } = require("../controllers/PayementController");
const payloadSchema = require("../validations/requestValidate");
const validateMiddleware = require("../middlewares/validateMiddleware");
const verifyTokenMiddleware = require("../middlewares/verifyTokenMiddleware");

paymentRouter.post(
  "",
  validateMiddleware(payloadSchema),
  verifyTokenMiddleware,
  initiatePayment
);
// paymentRouter.get("/my-route", middleware1, routeHandler);
module.exports = paymentRouter;
