import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"

import bookRoute from "./route/book.route.js";

// const express = require('express');
// const dotenv = require("dotenv");

const app = express();

dotenv.config();

const PORT=process.env.PORT || 4000;
const URI =process.env.MongoDBURI;

try {
  mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB Connected");

} catch (error){
  console.log("Error: ", error);
}

app.use("/book", bookRoute)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})