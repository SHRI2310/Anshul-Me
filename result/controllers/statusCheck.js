
import jwt  from "jsonwebtoken"
import { Mcq } from "../models/adminModel/mcqModel.js"

import { isAnswer } from "../utils/validation.js"
import tryCatch from "../middleware/tryCatch.js"
import Error from "../utils/error.js"
import axios from "axios"
import { fQuoteData } from "./insuranceController.js"



export const redirect = tryCatch(async(req,res,next)=>{

 let {QuotationNo}= req.body;
 

 let axios1 = await axios.post("https://riabroker-gi-sandbox-in.insuremo.com/v1/json/tickets",

      {
        username: "ebao.riabroker",
        password: "X@rsi999"
      },
      { headers: { "Content-Type": "application/json" } },
    )

 let findQuote  = await fQuoteData.findOne({QuotationNo})
//    let x =await findQuote
//  console.log(findQuote)
//  return res.send(findQuote)
  let url ="https://sandbox-in-gw.insuremo.com/riabroker/1.0/broker-bff-app/v1/redirect"

    let data1  ={QuotationNo:QuotationNo} 

    let config = {
        headers: {
          "Content-Type": "application/json",
          "Content-Length": data1.length,
          // "Host":"localHost",
          "User-Agent": "PostmanRuntime/7.30.0",
          "Accept": "*/*",
          "Accept-Encoding": "gzip,deflate,br",
          "Connection": "keep-alive",
          "Authorization":  `Bearer ${axios1?.data?.access_token}`,
  
  
        }
      };
   let axiosCall = await axios.post (url,data1,config)
    res.send(axiosCall.data)


})


