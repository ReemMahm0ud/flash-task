const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    transactionId: {
      type: String,
    },
    aggregatorOrderId: {
      type: String,
    },
    order: {
      id: {
        type: String,
      },
      description: {
        type: String,
      },
      customer: {
        name: {
          type: String,
        },
        phone: {
          type: String,
        },
      },
      amountCents: {
        type: Number,
      },
      currency: {
        type: String,
      },
      paymentLink: {
        type: String,
      },
      createdAt: {
        type: String,
      },
    },
    status: {
      type: String,
    },
    createdAt: {
      type: String,
    },
    additionalData: {
      key1: {
        type: String,
      },
      key2: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("orders", OrderSchema);
