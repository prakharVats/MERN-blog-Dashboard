import express from "express";
import mongoose from "mongoose";
import  dotenv from "dotenv";

dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected");
}).catch(err => {
    console.log("error connecting to the data base");
});
const app = express();

app.listen(3000 , () => {
    console.log("port 3000")
})