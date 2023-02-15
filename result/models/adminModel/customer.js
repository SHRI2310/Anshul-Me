import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({}, { strict: false }, { timestamps: true});


export const Customer = mongoose.model("Customer", customerSchema)