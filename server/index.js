const express = require("express");
const connectDB = require("./config/DBConnection");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRouter = require("./routes/AuthRouter");
const paymentRouter = require("./routes/PaymentRouter");
const webhookRouter = require("./routes/WebhookRouter");

connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/v1/auth/", authRouter);
app.use("/v1/orders", paymentRouter);
app.use("/webhooks", webhookRouter);

const port = 8000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
