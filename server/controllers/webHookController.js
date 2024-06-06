const Order = require("../models/OrderModel");

// Function to handle payment transaction webhook
const paymentTransactionWebhook = async (req, res) => {
  try {
    // Extract payload from request body
    const payload = req.body;
    console.log("Received webhook payload:", payload);
    // Save the payload data to the database
    const data = await Order.create(payload);
    // Check the payment status in the payload
    if (payload.status === "succeeded") {
      console.log("Payment succeeded:", payload);
      // Respond with a success message if the payment succeeded
      res.status(200).json({
        status: "HTTP 200 OK",
        message:
          "Webhook received successfully!. payment transaction completed successfully",
      });
    } else {
      console.error("Payment failed:", payload);
      // Respond with a failure message if the payment failed
      res.status(400).json({
        status: "HTTP 400 Bad Request",
        message: "Payment transaction failed",
      });
    }
  } catch (error) {
    // Handle any errors that occur during processing
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
