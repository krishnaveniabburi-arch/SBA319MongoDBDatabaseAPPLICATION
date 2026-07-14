import dotenv from "dotenv";

import express from "express";

import connectDB from "./db/db.js";

import mongoose from "mongoose";

import userRoutes from "./routes/user1.js";
import postRoutes from "./routes/post1.js";
import commentRoutes from "./routes/comment1.js";


dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/user1", userRoutes);
app.use("/post1", postRoutes);
app.use("/comment1", commentRoutes);

app.get("/", (req,res) => {
    res.send("result")
});

app.listen(PORT, () =>{
    console.log("Server started at http://localhost:" + PORT);
})

connectDB();