import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title in required"],
        enum: ["Mr", "Mrs", "Miss"],
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
      

    }
})
export const Admin = mongoose.model("Admin", adminSchema)

