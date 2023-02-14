import mongoose from "mongoose";
 import { mcqAnswerEnum } from "../../common/static.js"
// autoIncrement.initialize(connection);
const mcqSchema = new mongoose.Schema({}, { strict: false }, { timestamps: true, });
// new mongoose.Schema({

//   question: {
//     type: String,
   
//   },
//   answers:[String],
//   correctAnswer:{
//     type:Number,
//     enum:[0,1,2,3]
//   }

// })

export const Mcq = mongoose.model("Mcq", mcqSchema)

// options:{  
//   A: {
//     type: String,
//     trim: true,
   

//   },
//   B: {
//     type: String,
//     trim: true,

//   },
//   C: {
//     type: String,
//     trim: true,

//   },
//   D: {
//     type: String,
//     trim: true,

//   }
// }
//   ,
//   Answer: {
//     type: String,
//     enum:mcqAnswerEnum,
//     trim: true,
//     required:true
//   }