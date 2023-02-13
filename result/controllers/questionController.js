
import jwt  from "jsonwebtoken"
import { Mcq } from "../models/adminModel/mcqModel.js"

import { isAnswer } from "../utils/validation.js"
import tryCatch from "../middleware/tryCatch.js"
import Error from "../utils/error.js"



export const  uploadQue = tryCatch(async (req,res,next)=>{

        let data = req.body;
        
        
        
    
      
   //   let checkUnique = await Mcq.findOne(data.Question)
    
   //    if(checkUnique)   return next(new Error("You already  have this question ", 400))
  
   //      let checkQueCount = await Mcq.find().count()
        //  console.log(checkQueCount,checkQueCount<4)
    
         // if(checkQueCount > 40){
            
         //    return res.status(400).json({status:false,message:" Sorry Only 40 Questions can be added !"})
         // }
         let addQues =await Mcq.create(data);
         res.send(addQues)
    
    
    
    // return res.status(201).json({status:true,message:"Question Added"})
    
  
    })



    export  const showAllques = tryCatch(async(req,res)=>{
     
       
          const showAllQue = await Mcq.find().select("-_id").select("-CorrectAnswer").select("-__v");

          return res.status(200).json({status:true,data:showAllQue});
           
     
      })



    
      export  const ansCheck = tryCatch(async(req,res)=>{
     
       



        // const ans = await Mcq.find()
        // const mcqAnswerEnum = ["A","B","C","D"];
        // let x=`${clickedAns}`
        // let marks =0
        // for ( let i =0 ; i <=ans.length;i++){

        //     if(ans[i][Answer]== x  )  marks++
        // }

        return  res.status(200).json({status:true,data:showAllQue})
         
   
    })

