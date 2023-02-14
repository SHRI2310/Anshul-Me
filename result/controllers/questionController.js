
import jwt from "jsonwebtoken"
import { Mcq } from "../models/adminModel/mcqModel.js"

import { isAnswer } from "../utils/validation.js"
import tryCatch from "../middleware/tryCatch.js"
import Error from "../utils/error.js"
import e from "express"



export const uploadQue = tryCatch(async (req, res, next) => {
   let data = req.body;

   // if(data.length < 4){
   //    return next(new Error("provide all questions ", 400))
   // }
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

export const delQue = tryCatch(async (req, res, next) => {

   let { uid } = req.body;

   let del = await Mcq.findOneAndDelete({ uid: uid });
   // console.log(del)
   if (del === null) return next(new Error("there is no such question with this UID", 400))

   return res.send("Ques deleted")
})


export const editQue = tryCatch(async (req, res, next) => {
   let param = req.params.uid;
   let data = req.body;


   let edit = await Mcq.findOneAndUpdate({ uid: param }, data, { new: true });
   // console.log(edit);
   if (edit=== null) return next(new Error("there is no such question with this UID", 400))

   // console.log(del)
   // if(del === null) return next(new Error("there is no such question with this UID", 400))

   return res.send(edit)
})




export const ansCheck = tryCatch(async (req, res) => {

   // const ans = await Mcq.find()
   // const mcqAnswerEnum = ["A","B","C","D"];
   // let x=`${clickedAns}`
   // let marks =0
   // for ( let i =0 ; i <=ans.length;i++){

   //     if(ans[i][Answer]== x  )  marks++
   // }

   return res.status(200).json({ status: true, data: showAllQue })


})

