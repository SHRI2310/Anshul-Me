import mongoose from "mongoose";
 import { mcqAnswerEnum } from "../../common/static.js"
// autoIncrement.initialize(connection);
const mcqSchema = new mongoose.Schema({}, { strict: false }, { timestamps: true});


export const Mcq = mongoose.model("Mcq", mcqSchema)

