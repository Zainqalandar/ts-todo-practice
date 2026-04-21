
// const express = require("express");
import express, { Request, Response } from "express"; 
import { connectDB } from "./config/db";
const app = express();

const startServer = async () => {
   await connectDB();
}

startServer();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("TS Server Running 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
