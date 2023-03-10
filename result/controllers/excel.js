import tryCatch from "../middleware/tryCatch.js";
import { ExcelData } from "../models/excelSchema.js";
import csvtojson from "csvtojson"

export const retriveDataFromExcel = tryCatch(async (req,res,next)=>{
   
   console.log("helllllll");
    return res.send({status:200,message:"running"})
})