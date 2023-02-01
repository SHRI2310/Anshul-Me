
import tryCatch from "../middleware/tryCatch.js";
import Error from "../utils/error.js"
import axios from "axios";
import { config } from "dotenv";

export const fetchAmbrelaData = tryCatch(async (req, res, next) => {
    let url = "https://ambrelamoney.coherentlab.com/api/ambrela-auth",
        data = {
            userName: "MSWebRia",
            password: "M12sRia#1000"
        }
    const fetchData = await axios.post(url, data);
    //    console.log(fetchData.data.data.securityCode)

 let token = fetchData.data.data.securityCode


res.status(200).cookie("cookieToken",token).send({token:token,message:"token Saved"})




})



export  const getAgentProfile  = tryCatch(async(req,res,next)=>{

     let {cookieToken}=req.cookies
    //  console.log(token)
    
    let {token,pospId}=req.query;
    // //  console.log(req.query)
     if(cookieToken != token){
            return next(new Error(" you are Not authorised Token or POSPID is invalid", 400))
         }
         let pospId1 = "RIA205000002"
        
         if( pospId1 != pospId){
                return next(new Error(" you are Not authorised Token or POSPID is invalid", 400))
             }
            let url1 = "https://ambrelamoney.coherentlab.com/api/getAgentProfile"
            
            let data ={
                token,pospId
            }
            console.log(data)
            const sendData = await axios.get(url1,data,{headers:{"accept":"*/*"}})
            console.log(sendData)
    // //  let url1 = "https://ambrelamoney.coherentlab.com" 
    // res.redirect("https://ambrelamoney.coherentlab.com/api/getAgentProfile" )

 
  
    // }
    
    //  console.log(req.query)
    //  if(cookieToken != token){
    //     return next(new Error(" you are Not authorised Token or POSPID is invalid", 400))
    //  }
    //  let pospId1 = "RIA205000002"

    //  if( pospId1 != pospId){
    //     return next(new Error(" you are Not authorised Token or POSPID is invalid", 400))
    //  }
    
    // res.status(200).send({data:fetchData.data.data.securityCode,message:"token received"});

})

export const getCustomerProfile = tryCatch(async (req,res,next)=>{
    let {cookieToken}=req.cookies
    //  console.log(token)
    
     let url1 = "https://ambrelamoney.coherentlab.com" 

     let {token,customerId}=req.query
     console.log(cookieToken == token)
     if(cookieToken != token){
        return next(new Error(" you are Not authorised Token or POSPID is invalid", 400))
     }
     let checkCustomerId = "AC2301000024"

     if( checkCustomerId != customerId){
        return next(new Error(" you are Not authorised Token or POSPID is invalid", 400))
     }
    //  console.log(token1,"i am token 1",token==token1);
     const data1={
        token,
        checkCustomerId
     }
    const config = {
        headers: {
            "content-type": "application/json",
        }
    }

    // const sendData = await axios.post(url1, data1, config)
    // console.log(sendData)
    res.send(sendData)
})