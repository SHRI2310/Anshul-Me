
import tryCatch from "../middleware/tryCatch.js";
import Error from "../utils/error.js"
import axios from "axios";

export const  fetchAmbrelaData = tryCatch(async (req,res,next)=>{
    let url = "https://ambrelamoney.coherentlab.com/api/ambrela-auth",
    data ={
      userName:"MSWebRia",
      password:"M12sRia#1000"
    }
      const  fetchData = await axios.post(url,data);
    //    console.log(fetchData.data.data.securityCode)
     let {token ,pospId}=req.query

      
     
 token = fetchData.data.data.securityCode

 pospId =RIA205000002

    // res.status(200).send({data:fetchData.data.data.securityCode,message:"token received"});
   


    })
     