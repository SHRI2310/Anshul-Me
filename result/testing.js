 //! TRIED BY USING ASYNC  AWAIT STILL THE OUT PUT IS SAME 
//*this is our part we  are trying to simplify  the upper one is the main part which is sending the proper response  >>>!!!!!

// export const test = async (req, res, next) => {
//   try {

//     const data = req.body
//     const {
//       fName,
//       lName,
//       dateOfBirth,
//       mobile,
//       email,
//       salesChannelCode,
//       carrierCode,
//       insurerName,
//       frequency,
//       premium,
//       ppt,
//       term,
//       payOutFrequency,

//     } = data;

//     let user = {
//       fName,
//       lName,
//       dateOfBirth,
//       mobile,
//       email,
//     }

//     // const fields = ["fName", "lName", "dateOfBirth", "mobile", "email"]

//     // for (let field of fields) {
//     //   if (!data[field]) {
//     //     return next(new Error(`Please provide ${field} field`, 400));
//     //   }
//     // }


//     if (!fName.match(/^[a-zA-Z]{2,20}$/)) {
//       return next(new Error(`First Name only contain letters`, 400));
//     }
//     if (!lName.match(/^[a-zA-Z]{2,20}$/)) {
//       return next(new Error(`First Name only contain letters`, 400));
//     }
//     if (!isPhone(mobile)) {
//       return next(new Error(`Please provide Indian valid number`, 400));
//     }
//     if (!isEmail(email)) {
//       return next(new Error(`Email is not valid`, 400));
//     }

//     const isEmailUnique = await User.findOne({ email });
//     if (isEmailUnique) {
//       return next(new Error(`This email is already registered`, 400));
//     }

//     user = await User.create(user);

//     let createQuote = {
//       salesChannelCode,
//       carrierCode,
//       insurerName,
//       frequency,
//       premium,
//       ppt,
//       term,
//       payOutFrequency,
//       userId: user._id
//     }

//     // const quotefield = ["salesChannelCode",
//     //   "carrierCode",
//     //   "insurerName",
//     //   "frequency",
//     //   "premium",
//     //   "ppt",
//     //   "term",
//     //   "payOutFrequency"]

//     // for (let field of quotefield) {
//     //   if (!data[field]) {
//     //     return next(new Error(`Please provide ${field} field`, 400));
//     //   }
//     // }

//     createQuote = await Quote.create(createQuote)

//     //!--------------------->>>>>>>>>>>---------

//     let url = "https://riabroker-gi-sandbox-in.insuremo.com/v1/json/tickets"
//     let data1 = {
//       username: "ebao.riabroker",
//       password: "X@rsi999"
//     }
//     let config = { "Content-Type": "application/json" }

//     const firstApi = await axios.post(url, data1, config)

//     // console.log(firstApi, `====>>>>>.......>>>> FIRST API`);


//     let url2 = "https://sandbox-in-gw.insuremo.com/riabroker/1.0/broker-bff-app/v1/getQuote";
//     let data2 = {
//       "SalesChannelCode": createQuote.salesChannelCode,
//       "CarrierCode": createQuote.carrierCode,
//       "InsurerName": createQuote.insurerName,
//       "Frequency": createQuote.frequency,
//       "Premium": createQuote.premium,
//       "Term": createQuote.term,
//       "PPT": createQuote.ppt,
//       "PayoutFrequency": createQuote.payOutFrequency,
//       "PolicyLobList": [
//         {
//           "PolicyRiskList": [
//             {
//               "FirstName": user.fName,
//               "LastName": user.lName,
//               "DateOfBirth": user.dateOfBirth,
//               "Mobile": "",
//               "Email": ""
//             }
//           ]
//         }
//       ]
//     }

//     let config2 = {
//       "Content-Type": "application/json",
//       "Content-Length": JSON.stringify(data2).length.toString(),
//       "User-Agent": "PostmanRuntime/7.30.0",
//       "Accept": "*/*",
//       "Accept-Encoding": "gzip,deflate,br",
//       "Connection": "keep-alive",
//       "Authorization": `Bearer ${firstApi?.data?.access_token}`,
//     }
//  console.log(JSON.stringify(data2, null, 4))
//  const ek = async function (){

//    secondApi = await axios.post(url2, data2, config2) 
//   //  console.log(secondApi, `<<<<<<<<<<<secondApi>>>>>>`)
//   }
//   ek()
//     // //  res.json({data :secondApi})

//   } catch (error) {
//     console.log(error.message,"from here")
//   }
// }






//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// export const getCustomerProfile = tryCatch(async (req,res,next)=>{
//     let {cookieToken}=req.cookies
//     //  console.log(token)
    
//      let url1 = "https://ambrelamoney.coherentlab.com" 

//      let {token,customerId}=req.query
//      console.log(cookieToken == token)
//      if(cookieToken != token){
//         return next(new Error(" you are Not authorised Token or POSPID is invalid", 400))
//      }
//      let checkCustomerId = "AC2301000024"

//      if( checkCustomerId != customerId){
//         return next(new Error(" you are Not authorised Token or POSPID is invalid", 400))
//      }
//     //  console.log(token1,"i am token 1",token==token1);
//      const data1={
//         token,
//         checkCustomerId
//      }
//     const config = {
//         headers: {
//             "content-type": "application/json",
//         }
//     }

//     // const sendData = await axios.post(url1, data1, config)
//     // console.log(sendData)
//     res.send(sendData)
// })





// option:[{A:1},{b:2},{c:3},{d:4}]
// function f(){
//     var t = 10
    
//     return function g(){
//         console.log(t)
//     }
   
// }

// let x = f()
// let y = x()
//  console.log(y())
