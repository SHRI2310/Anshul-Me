import tryCatch from "../middleware/tryCatch.js";
import axios from "axios";

export const axiosCall1 = tryCatch(async(req,res,next)=>{
    let url ="https://riabroker-gi-sandbox-in.insuremo.com/v1/json/tickets"
    let data1 = {
     username: "ebao.riabroker",
     password: "X@rsi999"
   }
   let config =  { "Content-Type": "application/json" } 
 
   const firstApi = await axios.post(url,data1,config)
 
    console.log(firstApi.data, `====>>>>>.......>>>> FIRST API`);
 
})



export const axiosCall2 = async(url2,data2,config2)=>{
 try {
  
     const secondApi = await axios.post(url2,data2,config2)
 } catch (error) {
   console.log(error)
 }
}