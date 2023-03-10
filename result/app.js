import express from "express"
import errorHandler from "./middleware/errorHandler.js"
import route from "./routes/route.js"
import msWebApi from "./routes/msWebApi.js";
import cookieParser from "cookie-parser";
import adminRoute from "./routes/adminRoutes/route.js"
import questionRoutes from "./routes/questionRoutes.js"
import status from "./routes/statusCheckRoute.js";
import {config} from "dotenv"
import { connectDatabase } from "./config/database.js"
import mongoose from "mongoose";
import cors from "cors"
import excelRoute from "./routes/excelRoute.js"
export const app= express()
import { dirname} from 'path';
import { fileURLToPath} from 'url';
  import path from "path";
import multer from "multer";
  const __dirname = dirname(fileURLToPath(import.meta.url));



const StaticPath = path.join(__dirname,"./public")


// console.log(StaticPath)

app.use(cors({
    "origin": 'https://online.riainsurance.com',
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true
}));
app.use(cookieParser())
app.use(express.json())
app.set("view engine","hbs")
// app.use(express.static(path.resolve(__dirname,"./public")))
app.use("/",route)
app.use("/",msWebApi)
app.use("/",status)
app.use("/",adminRoute)
app.use("/",questionRoutes)
app.use(errorHandler)
app.use("/",excelRoute)

config({path:"./config/config.env"})
mongoose.set("strictQuery",true)
connectDatabase()
app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`)
})