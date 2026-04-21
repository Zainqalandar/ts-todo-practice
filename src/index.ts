
// const express = require("express");
import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("TS Server Running 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
