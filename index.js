import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();

const app = express();

const startServer = async () => {
  try {
    // step-1 connect db
    await connectDB();

    // step-2 start server
    app.listen(process.env.PORT, () => {
      console.log(`Server is running at: http://localhost:${process.env.PORT}`);
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

startServer();
