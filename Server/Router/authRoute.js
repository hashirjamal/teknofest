const express = require("express");
const authController = require("../Controller/authController");
const authRouter = express.Router();

authRouter.route("/signup").post(authController.signUp);
authRouter.route("/signin").post(authController.signIn);
authRouter.route("/forget-password").post(authController.forgetPassword);
authRouter.route("/reset-password/:token").patch(authController.resetPassword);
module.exports = authRouter;
