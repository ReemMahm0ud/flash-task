// import the packages
const express = require("express");
const connectDB = require("./config/DBConnection");
const dotenv = require("dotenv").config();
const cors = require("cors");
// import the routes modules
const authRouter = require("./routes/AuthRouter");
const paymentRouter = require("./routes/PaymentRouter");
const webhookRouter = require("./routes/WebhookRouter");
const userRouter = require("./routes/UserRouter");
// connect to the database
connectDB();
// create  instance of the application
const app = express();
app.use(cors()); // use cors middleware
app.use(express.json()); // use json middleware

// define routes
app.use("/v1/auth/", authRouter);
app.use("/v1/orders", paymentRouter);
app.use("/webhooks", webhookRouter);
app.use("/v1/users", userRouter);

// start the app on the port 8000
const port = 8000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
