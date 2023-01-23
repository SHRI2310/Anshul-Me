import Quotes from "../models/quote.js";
import User from "../models/user.js";
import tryCatch from "../middleware/tryCatch.js";
import Error from "../utils/error.js"
import axios from "axios";
import {isEmail,isPhone} from "../utils/validation.js"


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

  const fields = ["fname","lname","dateOfBirth","mobile","email"]

  for(let field of fields){
    if (!data[field]) {
      return next(new Error(`Please provide ${field} field`, 400));
    }
  }

  if (!fName.match(/^[a-zA-Z]{2,20}$/)) {
    return next(new Error(`First Name only contain letters`, 400));
  }
  if (!lName.match(/^[a-zA-Z]{2,20}$/)) {
    return next(new Error(`First Name only contain letters`, 400));
  }
  if (!isPhone(mobile)) {
    return next(new Error(`Please provide Indian valid number`, 400));
  }
  if (!isEmail(email)) {
    return next(new Error(`Email is not valid`, 400));
  }

  const isEmailUnique = await User.findOne({ email });
  if (isEmailUnique) {
    return next(new Error(`This email is already registered`, 400));
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

  const quotefield = [  "salesChannelCode",
    "carrierCode",
    "insurerName",
    "frequency",
    "premium",
    "ppt",
    "term",
    "payOutFrequency"]

  for(let field of quotefield){
    if (!data[field]) {
      return next(new Error(`Please provide ${field} field`, 400));
    }
  }

  createQuote = await Quotes.create(createQuote)

   let n = axios.post("https://riabroker-gi-sandbox-in.insuremo.com/v1/json/tickets",
    
    {
      username: "ebao.riabroker",
      password: "X@rsi999"
    },
    {headers: { "Content-Type": "application/json" }},
    

  ).then((response) => {
     console.log(response.data)
    console.log(response.data.access_token)
    let xyz=axios.post("https://sandbox-in-gw.insuremo.com/riabroker/1.0/broker-bff-app/v1/getQuote",{
       Headers:{
         "Content-Type": "application/json",
         "Authorization":  response.data.access_token,
       }
     })
  })
  // return res.send()
  




})



