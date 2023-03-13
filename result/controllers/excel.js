import tryCatch from "../middleware/tryCatch.js";
import { ExcelData } from "../models/excelSchema.js";
import csv from "csvtojson"
import multer from "multer"
import XLSX from "xlsx"
import fs from "fs"


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/uploads")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
export const upload = multer({ storage: storage })


export const retriveDataFromExcel = tryCatch(async (req, res, next) => {
// function  whichh takes xlsx file and convert it to csv
    function excelToCsv(excelFile) { 
        const workbook = XLSX.readFile(excelFile);
        const sheet_name_list = workbook.SheetNames;
        const csvData = XLSX.utils.sheet_to_csv(workbook.Sheets[sheet_name_list[0]]);
        const outputFilePath = `${excelFile.substring(0, excelFile.lastIndexOf('.'))}.csv`;
        fs.writeFileSync(outputFilePath, csvData, 'utf8');
        return outputFilePath;
    }


    let excelFilepath = req.file.path
    const csvFile = excelToCsv(excelFilepath)
    let excelDataImport = []
    csv().fromFile(csvFile).then(async (response) => {
        for (let i = 0; i < response.length; i++) {
            excelDataImport.push({
                "Application No": response[i]["Application No"],
                "Policy No": response[i]["Policy No"],
                "Lead ID": response[i]["Lead ID"],
                "Net Net EPI": response[i]["Net Net EPI"],
                "EPI in Cr": response[i]["EPI in Cr"],
                "Premium": response[i]["Premium"],
                "Net Premium": response[i]["Net Premium"],
                "Sum Assured": response[i]["Sum Assured"],
                "Net Net NOP": response[i]["Net Net NOP"],

                "Proposal Date": response[i]["Proposal Date"],
                "Orignal Issuance Date": response[i]["Orignal Issuance Date"],
                "Contract Commencement Date": response[i]["Contract Commencement Date"],
                "FIN_YR": response[i]["FIN_YR"],
                "FIN_MONTH": response[i]["FIN_MONTH"],
                "STATCODE": response[i]["STATCODE"],
                "CHDRSTCDB": response[i]["CHDRSTCDB"],
                "EFFECT": response[i]["EFFECT"],
                "Transaction No": response[i]["Transaction No"],
                "Transaction  Date Final": response[i]["Transaction  Date Final"],
                "Transaction Date": response[i]["Transaction Date"],
                "Cancellation Date": response[i]["Cancellation Date"],
                "LINEGROUP": response[i]["LINEGROUP"],
                "BILLFREQ": response[i]["BILLFREQ"],
                "Premium Paying Term": response[i]["Premium Paying Term"],
                "Policy Term": response[i]["Policy Term"],
                "DEFPERD": response[i]["DEFPERD"],
                "LOB": response[i]["LOB"],
                "LOB reporting": response[i]["LOB reporting"],
                "Product Code": response[i]["Product Code"],
                "Product Name": response[i]["Product Name"],
                "Product Variant": response[i]["Product Variant"],
                "PAR_NPAR_UL": response[i]["PAR_NPAR_UL"],
                "PIPS": response[i]["PIPS"],
                "REPNUM": response[i]["REPNUM"],
                "Channel": response[i]["Channel"],
                "Sub Channel": response[i]["Sub Channel"],
                "Payee Code": response[i]["Payee Code"],
                "Payee Name": response[i]["Payee Name"],
                "Relationship Name": response[i]["Relationship Name"],
                "Client ID": response[i]["Client ID"],
                "Client Name": response[i]["Client Name"],
                "AGNTNUM": response[i]["AGNTNUM"],
                "Agent Name": response[i]["Agent Name"],

            })
        }

        await ExcelData.insertMany(excelDataImport)
    })
    return res.send({ status: 200, message: "Data  Added to Db", })
})