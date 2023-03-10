
import jwt from "jsonwebtoken"
import { Mcq } from "../models/adminModel/mcqModel.js"

import { isAnswer } from "../utils/validation.js"
import tryCatch from "../middleware/tryCatch.js"
import Error from "../utils/error.js"
import axios from "axios"





export const uploadQue = tryCatch(async (req, res, next) => {
   let data = req.body;
   if (!data.length) return next(new Error("request body is empty ", 400))

   if(data.length < 40){
      return next(new Error("provide all questions ", 400))
   }
   let addQues = await Mcq.create(data);

   return res.send(addQues)




   //   let checkUnique = await Mcq.findOne(data.Question)

   //    if(checkUnique)   return next(new Error("You already  have this question ", 400))

   //      let checkQueCount = await Mcq.find().count()
   //  console.log(checkQueCount,checkQueCount<4)

   // if(checkQueCount > 40){

   //    return res.status(400).json({status:false,message:" Sorry Only 40 Questions can be added !"})
   // }



   // return res.status(201).json({status:true,message:"Question Added"})


})



export const showAllques = tryCatch(async (req, res) => {


   const showAllQue = await Mcq.find().select("-_id").select("-__v");

   return res.status(200).json({ status: true, data: showAllQue });


})

export const showTest = tryCatch(async (req, res) => {


   const allque = await Mcq.find().select("-_id").select("-correctAnswer").select("-__v");

   return res.status(200).json({ status: true, data: allque });


})

export const delQue = tryCatch(async (req, res, next) => {

   let { uid } = req.body;
   if (!req.body.length) return next(new Error("request body is empty ", 400))

   let del = await Mcq.findOneAndDelete({ uid: uid });
   // console.log(del)
   if (del === null) return next(new Error("there is no such question with this UID", 400))

   return res.send("Ques deleted")
})


export const editQue = tryCatch(async (req, res, next) => {
   let param = req.params.uid;
   let data = req.body;
   if (!data.length) return next(new Error("request body is empty ", 400))


   let edit = await Mcq.findOneAndUpdate({ uid: param }, data, { new: true });
   // console.log(edit);
   if (edit === null) return next(new Error("there is no such question with this UID", 400))

   // console.log(del)
   // if(del === null) return next(new Error("there is no such question with this UID", 400))

   return res.send(edit)
})




export const ansCheck = tryCatch(async (req, res,next) => {
  
let {cookieId,cookieToken}= req.cookies;

   let test =req.body;
   if (!test.length) return next(new Error("request body is empty ", 400))

   let check = await Mcq.find().sort({uid:1})
   // console.log(test);
   // console.log(check);
   let marks = 0
   let passingMarks =5

   const map = {};
   for (let i = 0; i < test.length; i++) {
     const { uid,correctAnswer } = test[i];
     map[uid] = correctAnswer;
   }
   for (let i = 0; i < check.length; i++) {
     const { uid,correctAnswer }= check[i];
   //   console.log(x[i],"--->>",CorrectAnswer)
   // console.log(uid,correctAnswer)
     if (  map[uid]== correctAnswer) {
       marks++;
     }
   }
// console.log(map)
   let flag ;
if(marks >= passingMarks) 
{
console.log("hereeeeeeeeeeee");
   flag ="PASSED";
let Update_Education_Status = await axios.post(`https://test.ambrela.money/api/updateEducationStatus?token=${cookieToken}&pospId=${"RIA205000002"}&educationStatus=${flag}`)
.then(async( res)=>{
   console.log(res)
}) 
return res.json({marks:marks,message:`CONGRATULATIONS YOU ARE ${flag} ...!!!????????`})

}
if(marks < passingMarks) 
{
   console.log("thereeeeeeeeeee");
   flag ="FAILED"
   let Update_Education_Status = await axios.post(`https://test.ambrela.money/api/updateEducationStatus?token=${cookieToken}&pospId=${"RIA205000002"}&educationStatus=${"failed"}`)
   .then(async( res)=>{
      console.log(res.data)

   })
  return res.json({marks:marks,message:`HARD LUCK SORRY....!!!!???????? You Are Failed ${flag} `})

}
   // console.log(count);
   

})

