
import tryCatch from "../middleware/tryCatch.js";
import Error from "../utils/error.js"
import axios from "axios";
import { Agent} from "../models/agentData.js";
import mongoose from "mongoose";
// export const test =mongoose.model("test",{})


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

    let {token,pospId}=req.query;
    let params ={}
    if(token) params.token =token;
    if(pospId) params.pospId =pospId;
  
     if(cookieToken != params.token){
        // console.log(cookieToken, token,"tpoken");
            return next(new Error(" you are Not authorised Token or POSPID is invalid", 400))
         }
         let pospId1 = "RIA205000002"
        
         if( pospId1 != params.pospId){
            // console.log(pospId1 != pospId, "posp");
                return next(new Error(" you are Not authorised Token or POSPID is invalid", 400))
             }


            let url1 = "https://ambrelamoney.coherentlab.com/api/getAgentProfile"
            
          
            // console.log(data)
            const sendData = await axios.get(url1,{params:params})
            // console.log(sendData.data)
            const saveData =await Agent.create(sendData.data)
            // console.log(saveData)
            res.status(200).cookie("id",saveData._id).send({data:sendData.data,id:saveData._id})
  
})






export const generateCertificate = tryCatch(async(req,res,next)=>{
const {id} =req.cookies;
// console.log(id);

const getAgent = await Agent.findById(id)
// console.log(getAgent.data)

    //  const getAgent = await test. 

        // const data =req.body
        const xyz ="helllo"
        console.log(getAgent.data.aadharNo);
        res.render("index",{
            CandidateName:`${getAgent.data.firstName}  ${getAgent.data.lastName}`,
            panNo: getAgent.data.panNo,
            aadharNo :getAgent.data.aadharNo
        })
    

    
     

})





export  const getCustomerProfile  = tryCatch(async(req,res,next)=>{

    let {cookieToken}=req.cookies

   let {token,customerId}=req.query;
   let params ={}
   if(token) params.token =token;
   if(customerId) params.customerId =customerId;
 
    if(cookieToken != params.token){
       // console.log(cookieToken, token,"tpoken");
           return next(new Error(" you are Not authorised Token or customerId is invalid", 400))
        }
        let customerId1 = "AC2301000024"
       
        if( customerId1 != params.customerId){
           // console.log(pospId1 != pospId, "posp");
               return next(new Error(" you are Not authorised Token or customerId is invalid", 400))
            }


           let url1 = "https://ambrelamoney.coherentlab.com/api/getCustomerProfile"
           
         
           // console.log(data)
           const sendData = await axios.get(url1,{params:params})
           // console.log(sendData.data)
           
           res.send(sendData.data)
 


 
 

})
