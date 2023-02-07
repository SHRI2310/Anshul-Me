import express from "express"
import errorHandler from "./middleware/errorHandler.js"
import route from "./routes/route.js"
import msWebApi from "./routes/msWebApi.js";
import cookieParser from "cookie-parser";
import adminRoute from "./routes/adminRoutes/route.js"
import questionRoutes from "./routes/questionRoutes.js"
import status from "./routes/statusCheckRoute.js";


export const app= express()
import {
    dirname
  } from 'path';
  import {
    fileURLToPath
  } from 'url';
  import path from "path";
  const __dirname = dirname(fileURLToPath(
    import.meta.url));



const StaticPath = path.join(__dirname,"./views")


console.log(StaticPath)
app.use(cookieParser())
app.use(express.json())
app.set("view engine","hbs")
app.use(express.static(StaticPath))
app.use("/",route)
app.use("/",msWebApi)
app.use("/",status)
app.use("/",adminRoute)
app.use("/",questionRoutes)
app.use(errorHandler)