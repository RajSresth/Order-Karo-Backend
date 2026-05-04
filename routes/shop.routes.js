import express from "express";
import { isAuth } from "../middleware/auth.js";
import { createShop, editShop, getMyShop, removeShop } from "../controllers/shop.controller.js";
import { upload } from "../middleware/multer.js";

const shopRoutes = express.Router();


shopRoutes.post("/create-shop", isAuth, upload.single("image"), createShop);
shopRoutes.put("/edit-shop/:shopId", isAuth, upload.single("image"), editShop);
shopRoutes.get("/get-my-shop",isAuth,getMyShop);
shopRoutes.delete("/remove-shop/:shopId", isAuth, removeShop);

export default shopRoutes;
