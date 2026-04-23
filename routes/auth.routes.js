import express from "express";
import {signup, login, logout, sendOtp, resetPassword, verifyOtp} from "../controllers/auth.controller.js";
const authRoutes = express.Router()

authRoutes.post("/register",signup);
authRoutes.post("/login",login);
authRoutes.post("/logout",logout);
authRoutes.post("/send-otp",sendOtp);
authRoutes.post("/verify-otp",verifyOtp);
authRoutes.post("/reset-password",resetPassword);

export default authRoutes;