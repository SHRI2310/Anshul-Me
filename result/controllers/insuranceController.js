import { Quote } from "../models/quote.js";
import { User } from "../models/user.js";
import tryCatch from "../middleware/tryCatch.js";
import Error from "../utils/error.js"
import axios from "axios";
import { isEmail, isPhone } from "../utils/validation.js"

import mongoose from "mongoose";

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

  const fields = ["fName", "lName", "dateOfBirth", "mobile", "email"]

  for (let field of fields) {
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

  const isMobileUnique = await User.findOne({ mobile });
  if (isMobileUnique) {
    return next(new Error(`This mobile is already registered`, 400));
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

  const quotefield = ["salesChannelCode",
    "carrierCode",
    "insurerName",
    "frequency",
    "premium",
    "ppt",
    "term",
    "payOutFrequency"]

  for (let field of quotefield) {
    if (!data[field]) {
      await User.findByIdAndDelete(user._id)
      return next(new Error(`Please provide ${field} field`, 400));
    }
  }

  createQuote = await Quote.create(createQuote)

  const expectedData = await Quote.findOne({ email }).populate("userId")

  let da = await axios.post("https://riabroker-gi-sandbox-in.insuremo.com/v1/json/tickets",

    {
      username: "ebao.riabroker",
      password: "X@rsi999"
    },
    { headers: { "Content-Type": "application/json" } },
  )
    .then(async (response) => {

      let bodyData = {
        "SalesChannelCode": createQuote.salesChannelCode,
        "CarrierCode": createQuote.carrierCode,
        "InsurerName": createQuote.insurerName,
        "Frequency": createQuote.frequency,
        "Premium": createQuote.premium,
        "Term": createQuote.term,
        "PPT": createQuote.ppt,
        "PayoutFrequency": createQuote.payOutFrequency,
        "PolicyLobList": [
          {
            "PolicyRiskList": [
              {
                "FirstName": user.fName,
                "LastName": user.lName,
                "DateOfBirth": user.dateOfBirth,
                "Mobile": user.mobile,
                "Email": user.email
              }
            ]
          }
        ]
      }
      //  console.log(JSON.stringify(bodyData, null, 4))
      // console.log(response?.data?.access_token, "hiee I am token")
      await axios.post("https://sandbox-in-gw.insuremo.com/riabroker/1.0/broker-bff-app/v1/getQuote",
        bodyData
        , {
          headers: {
            "Content-Type": "application/json",
            "Content-Length": bodyData.length,
            // "Host":"localHost",
            "User-Agent": "PostmanRuntime/7.30.0",
            "Accept": "*/*",
            "Accept-Encoding": "gzip,deflate,br",
            "Connection": "keep-alive",
            "Authorization": `Bearer ${response?.data?.access_token}`,


          }

        }).then((nData) => {

          return res.send(nData.data)
        }).catch(err1 => {
          // console.log(err1, "from here")
          return res.status(500).send({ status: false, mssage: err1.message })
        })

    }).catch(err => {
      return res.send(err.message)
    })

})





//*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1------------------>>>>>>>>>>>>>>>>>>>>>>>>>

const fQuoteSchema = new mongoose.Schema({}, { strict: false },{ timestamps: true,});
 export const fQuoteData = mongoose.model('fQuoteData', fQuoteSchema);

export let finalQuote = async (req, res) => {
  try {
    let body = req.body
    console.log("hello i am running")
    // const data = req.body
    const {
      EffectiveDate,
      CarrierProductId,
      CarrierPlanId,
      Plan,
      CarrierCode,
      InsurerName,
      Frequency,
      SumAssured,
      ChannelPartner,
      Premium,
      Term,
      PPT,
      TouchPoint,
      AgentCode,
      QniProduct,
      PayOutFrequency,
      PolicyLobList: [
        {
          PolicyRiskList: [
            { FirstName, LastName, Email, MobileNo, DateOfBirth }
          ]
        }
      ]
    } = body;

    // console.log(body)
    let axios1 = await axios.post("https://riabroker-gi-sandbox-in.insuremo.com/v1/json/tickets",

      {
        username: "ebao.riabroker",
        password: "X@rsi999"
      },
      { headers: { "Content-Type": "application/json" } },
    )
    // console.log(axios1.data);


    let url = "https://sandbox-in-gw.insuremo.com/riabroker/1.0/broker-bff-app/v1/finalQuote";
    let bodyData = {
      "EffectiveDate": EffectiveDate,
      "CarrierProductId": CarrierProductId,
      "CarrierPlanId": CarrierPlanId,
      "Plan": Plan,
      "CarrierCode": CarrierCode,
      "InsurerName": InsurerName,
      "Frequency": Frequency,
      "SumAssured": SumAssured,
      "ChannelPartner": ChannelPartner,
      "Premium": Premium,
      "Term": Term,
      "PPT": PPT,
      "TouchPoint": TouchPoint,
      "AgentCode": AgentCode,
      "QniProduct": QniProduct,
      "PayoutFrequency": PayOutFrequency,
      "PolicyLobList": [
        {
          "PolicyRiskList": [
            {
              "FirstName": FirstName,
              "LastName": LastName,
              "Email": "",
              "MobileNo": MobileNo,
              "DateOfBirth": DateOfBirth
            }
          ]
        }
      ]
    }

    let config = {
      headers: {
        "Content-Type": "application/json",
        "Content-Length": bodyData.length,
        // "Host":"localHost",
        "User-Agent": "PostmanRuntime/7.30.0",
        "Accept": "*/*",
        "Accept-Encoding": "gzip,deflate,br",
        "Connection": "keep-alive",
        "Authorization": `Bearer ${axios1?.data?.access_token}`,


      }
    };
    // console.log(config.Authorization,config["Content-Length"], ".............>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

    let axios2 = await axios.post(url, bodyData, config)
    const  saveData =  await fQuoteData.create(axios2.data.PolicyObject)
    console.log(saveData)
    if(saveData) console.log( "data saved")
    return res.status(200).send(axios2.data)
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message)
  }
}



// *<<<<<<<<<<<<<<<<<<--------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!------------------------------>>>>>>>>>>

export const filterApi = tryCatch(async (req, res, next) => {

  //  const {frequency,ppt,term,payOutFrequency}  = req.query

  //    const filter = await Quote.find({ $or: [ { frequency:frequency }, { ppt:ppt }, { term:term },{payOutFrequency:payOutFrequency} ] })
  //     res.send(filter)



  const data = req.body;
  const {
    fName,
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

  let da = await axios
    .post(
      "https://riabroker-gi-sandbox-in.insuremo.com/v1/json/tickets",

      {
        username: "ebao.riabroker",
        password: "X@rsi999",
      },
      { headers: { "Content-Type": "application/json" } }
    )
    .then(async (response) => {
      let bodyData = {
        SalesChannelCode: salesChannelCode,
        CarrierCode: carrierCode,
        InsurerName: insurerName,
        Frequency: frequency,
        Premium: premium,
        Term: term,
        PPT: ppt,
        PayoutFrequency: payOutFrequency,
        PolicyLobList: [
          {
            PolicyRiskList: [
              {
                FirstName: fName,
                LastName: lName,
                DateOfBirth: dateOfBirth,
                Mobile: mobile,
                Email: email,
              },
            ],
          },
        ],
      };
      //  console.log(JSON.stringify(bodyData, null, 4))
      // console.log(response?.data?.access_token, "hiee I am token")
      await axios
        .post(
          "https://sandbox-in-gw.insuremo.com/riabroker/1.0/broker-bff-app/v1/getQuote",
          bodyData,
          {
            headers: {
              "Content-Type": "application/json",
              "Content-Length": bodyData.length,
              // "Host":"localHost",
              "User-Agent": "PostmanRuntime/7.30.0",
              "Accept": "*/*",
              "Accept-Encoding": "gzip,deflate,br",
              "Connection": "keep-alive",
              "Authorization": `Bearer ${response?.data?.access_token}`,
      
      
            }
          }
        )
        .then((nData) => {
          return res.send(nData.data);
        })
        .catch((err1) => {
          // console.log(err1, "from here")
          return res.status(500).send({ status: false, mssage: err1.message });
        });
    })
    .catch((err) => {
      // console.log(err)
      return res.send(err.message);
    });


})
