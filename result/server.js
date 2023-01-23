import {app} from "./app.js"
import mongoose from "mongoose"

import {config} from "dotenv"
import { connectDatabase } from "./config/database.js"
config({path:"./config/config.env"})
mongoose.set("strictQuery",true)
connectDatabase()
app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`)
})