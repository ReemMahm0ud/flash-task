const Order = require("../models/OrderModel");

const paymentTransactionWebhook = async (req, res) => {
  try {
    const payload = req.body;
    console.log("Received webhook payload:", payload);
    const data = await Order.create(payload);

    if (payload.status === "succeeded") {
      console.log("Payment succeeded:", payload);
      res.status(200).json({
        status: "HTTP 200 OK",
        message:
          "Webhook received successfully!. payment transaction completed successfully",
      });
    } else {
      console.error("Payment failed:", payload);
      res.status(400).json({
        status: "HTTP 400 Bad Request",
        message: "Payment transaction failed",
      });
    }
  } catch (error) {
    return res.status(500).json({
      error,
      status: "HTTP 500 Internal Server Error",
      message: "something went wrong!. failed to save the data ",
    });
  }
};

module.exports = {
  paymentTransactionWebhook,
};
