import express from "express";
import {signup, login, logout, sendOtp} from "../controller/auth.controller.js";
const authRoutes = express.Router()

authRoutes.post("/register",signup);
authRoutes.post("/login",login);
authRoutes.post("/logout",logout);
authRoutes.post("/send-otp",sendOtp);
export default authRoutes;