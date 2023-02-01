import express from "express"
import errorHandler from "./middleware/errorHandler.js"
import route from "./routes/route.js"
import msWebApi from "./routes/msWebApi.js";
import cookieParser from "cookie-parser";

export const app= express()
app.use(cookieParser())
app.use(express.json())
app.use("/",route)
app.use("/",msWebApi)
app.use(errorHandler)