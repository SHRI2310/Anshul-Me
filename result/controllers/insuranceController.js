import Quotes from "../models/quote.js";
import User from "../models/user.js";
import tryCatch from "../middleware/tryCatch.js";
import Error from "../utils/error.js"
import axios from "axios";



export const result = tryCatch(async (req, res, next) => {
  const { resultStatus } = req.query

  if (resultStatus != "passed" && resultStatus != "failed") {
    return next(new Error(`resultStatus should be passed or failed`, 400));
  }

  const data = await Student.find({ resultStatus })

  if (!data) {
    return next(new Error(`student not found`, 404));
  }

  res.status(200).send({ status: true, "total students": data.length, data: data })
})


export const insuranceApi = tryCatch(async (req, res, next) => {

  const data = req.body
  const { fName,
    lName,
    dateOfBirth,
    mobile,
    email,
    salesChannelCode,
    carrierCode,
    insurerName,
    frequency,
    premium,
    ppt,
    term,
    payOutFrequency,

  } = data;

  let user = {
    fName,
    lName,
    dateOfBirth,
    mobile,
    email,
  }
  user = await User.create(user);

  let createQuote = {
    salesChannelCode,
    carrierCode,
    insurerName,
    frequency,
    premium,
    ppt,
    term,
    payOutFrequency,
    userId: user._id
  }
  createQuote = await Quotes.create(createQuote)

   let n = axios.post("https://riabroker-gi-sandbox-in.insuremo.com/v1/json/tickets",
    
    {
      username: "ebao.riabroker",
      password: "X@rsi999"
    },
    

  ).then((response) => {
    // console.log(response.data)
    console.log(response.data.access_token)
  //  let xyz=axios.post("https://sandbox-in-gw.insuremo.com/riabroker/1.0/broker-bff-app/v1/getQuote",{
  //     Headers:{
  //       "Content-Type": "application/json",
  //       "Authorization":  response.data.access_token,
  //     }
  //   })
  })
  // return res.send()
  




})



