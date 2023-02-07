import {app} from "./app.js"
import mongoose from "mongoose"

import {config} from "dotenv"
import { connectDatabase } from "./config/database.js"
import https from "https"
import path from "path"
import fs from "fs"

const sslServer = https.createServer({
    key:"",
    certificate:""
},app)




config({path:"./config/config.env"})
mongoose.set("strictQuery",true)
connectDatabase()
sslServer.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`)
})