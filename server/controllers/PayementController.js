const User = require("../models/UserModel");
const Order = require("../models/OrderModel");
const jwt = require("jsonwebtoken");
const uuid = require("uuid");
const payloadSchema = require("../validations/requestValidate");
const transactionSchema = require("../validations/webHookValidate");
// Function to initiate payment
const initiatePayment = async (req, res) => {
  try {
    // Destructure request body to get payment details
    const {
      integrationId,
      aggregatorOrderId,
      description,
      customer,
      amountCents,
      currency,
    } = req.body;

    // Generate unique order ID and merchant ID
    const orderId = uuid.v4();
    const merchantId = `merchant_${Date.now()}`;
    // Generate payment link (for demonstration purposes, using a placeholder URL)
    const paymentLink = `https://payments.example.com/${orderId}`;

    // Create response object with order details
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

    // Return the response with order details and status 201 (Created)
    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    // Return a 500 (Internal Server Error) response with error message
    return res.status(500).json({
      error,
      message: "something went wrong, please try again later. thank you! ",
    });
  }
};

module.exports = {
  initiatePayment,
};
