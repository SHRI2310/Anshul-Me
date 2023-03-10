import mongoose from "mongoose";

const excelSchema = new mongoose.Schema({
   "#":{
type:String,
    },
   "Student Name":{
    type:String,
   },
  "Email ID":{
    type:String,
   },
   "Unique ID":{
    type:String,
},
"Mobile No.":{
    type:String,
   },
   "Batch":{
    type:String,
   },
   "Pending Videos out of 14":{
    type:String
   }


},{ strict: false });


export const ExcelData = mongoose.model("ExcelData", excelSchema)
