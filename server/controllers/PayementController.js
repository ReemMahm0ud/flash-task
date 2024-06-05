const User = require("../models/UserModel");
const Order = require("../models/OrderModel");
const jwt = require("jsonwebtoken");
const uuid = require("uuid");
const payloadSchema = require("../validations/requestValidate");
const transactionSchema = require("../validations/webHookValidate");

// ^01[0-2,5]{1}[0-9]{8}$

const initiatePayment = async (req, res) => {
  try {
    const {
      integrationId,
      aggregatorOrderId,
      description,
      customer,
      amountCents,
      currency,
    } = req.body;

    //generate the response object
    const orderId = uuid.v4();
    const merchantId = `merchant_${Date.now()}`;
    const paymentLink = `https://payments.example.com/${orderId}`;

    const response = {
      order: {
        id: orderId,
        merchantId: merchantId,
        aggregatorOrderId,
        description: description || "",
        billingInfo: {
          customerName: customer.name || "Unknown",
          phoneNumber: customer.phone,
        },
        amountCents,
        paymentLink,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: "pending",
      },
    };

    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
      message: "something went wrong, please try again later. thank you! ",
    });
  }
};

module.exports = {
  initiatePayment,
};
