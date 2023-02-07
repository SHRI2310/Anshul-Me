import mongoose from "mongoose";
 import { mcqAnswerEnum } from "../../common/static.js"

const mcqSchema = new mongoose.Schema({
  question: {
    type: String,
    trim: true,
    required: true,
  },
option:{  
  A: {
    type: String,
    trim: true,
   

  },
  B: {
    type: String,
    trim: true,

  },
  C: {
    type: String,
    trim: true,

  },
  D: {
    type: String,
    trim: true,

  }},
  Answer: {
    type: String,
    enum:mcqAnswerEnum,
    trim: true,
    required:true
  }
})

export const Mcq = mongoose.model("Mcq", mcqSchema)