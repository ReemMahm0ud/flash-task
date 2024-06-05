const express = require("express");
const userRouter = express.Router();
const { isRegisteredCheck } = require("../controllers/UserController");
const verifyTokenMiddleware = require("../middlewares/verifyTokenMiddleware");

userRouter.post("/checkUser", verifyTokenMiddleware, isRegisteredCheck);

module.exports = userRouter;
