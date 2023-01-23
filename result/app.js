import express from "express"
import errorHandler from "./middleware/errorHandler.js"
import route from "./routes/route.js"
export const app= express()
app.use(express.json())

app.use("/",route)
app.use(errorHandler)