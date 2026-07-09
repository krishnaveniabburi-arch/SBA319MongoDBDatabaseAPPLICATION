import dotenv from "dotenv";

import express from "express";

import connectDB from "./db/db.js";

import mongoose from "mongoose";

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req,res) => {
    res.send("result")
});

app.listen(PORT, () =>{
    console.log("Server started at http://localhost:" + PORT);
})

connectDB();