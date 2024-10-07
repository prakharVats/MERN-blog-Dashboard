import express from "express";
import mongoose from "mongoose";
import  dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

const app = express();

app.use(express.json());

// database connection
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected");
}).catch(err => {
    console.log("error connecting to the data base");
});

// middleware
app.use("/api/user" , userRoutes)

app.use("/api/auth" , authRoutes)

app.listen(3000 , () => {
    console.log("port 3000");
})
