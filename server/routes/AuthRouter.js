const express = require("express");
const authRouter = express.Router();
const { authApi } = require("../controllers/AuthController");

authRouter.post("/token", authApi);

module.exports = authRouter;
