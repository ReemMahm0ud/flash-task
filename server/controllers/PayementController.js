const User = require("../models/UserModel");
const Order = require("../models/OrderModel");
const jwt = require("jsonwebtoken");
const uuid = require("uuid");
const payloadSchema = require("../validations/requestValidate");
const transactionSchema = require("../validations/webHookValidate");

// ^01[0-2,5]{1}[0-9]{8}$

const initiatePayment = async (req, res) => {
  try {
    // check if authorization header has been provided
    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith("Bearer ")
    ) {
      return res
        .status(403)
        .json({ message: "Invalid authorization or not authorized" });
    }

    // check request body has been provided and validate it
    // const { error } = payloadSchema.validate(req.body, { abortEarly: false });

    // if (error) {
    //   const missingFields = error.details.map((detail) => detail.context.key);
    //   return res.status(400).json({
    //     message: "missing field(s) or validation errors",
    //     missingFields,
    //   });
    // }

    // verify the token

    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, process.env.JWT_KEY, async (err, data) => {
      if (err) {
        return res
          .status(498)
          .json({ message: "invalid token or it's expired" });
      }
    });

    const {
      integrationId,
      aggregatorOrderId,
      description,
      customer,
      amountCents,
      currency,
    } = req.body;

    let isRegistered = false;

    // check if user registered or not
    const user = await User.findOne({ phone: customer.phone });

    if (user) {
      isRegistered = true;
    }

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
        isRegistered,
      },
    };

    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({
      error,
      message: "something went wrong, please try again later. thank you! ",
    });
  }
};

module.exports = {
  initiatePayment,
};
