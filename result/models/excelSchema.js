import mongoose from "mongoose";

const excelSchema = new mongoose.Schema({},{ strict: false });


export const ExcelData = mongoose.model("ExcelData", excelSchema)
