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
      

    },
})
export const Admin = mongoose.model("Admin", adminSchema)

// $2b$10$81IMKzbl.x8oXDN6aB.fKeu6TsPaBkFnbx0/8mgQlSGuPejKbwJQy


// {
//     title: {
//         type: String,
//         required: [true, "title in required"],
//         enum: ["Mr", "Mrs", "Miss"],
//         trim: true
//     },
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     middleName: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     lastName: {
//         type: String,
//         required: true,
//         trim: true,

//     },
//     address: {
//         state: {
//             type: String,
//             required: true,
//             trim: true
//         },
//         city: {
//             type: String,
//             required: true,
//             trim: true
//         },
//         pincode: {
//             type: Number,
//             required: true,
//             trim: true,

//         },

//     },
//     mobile: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
      

//     },
//     bankName: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     accountName: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true
//     },
//     accountNumber: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true
//     },
//     ifsc: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true
//     },
//     panCardNo: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true
//     },
//     gstNumber: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true
//     },
//     adharNumber: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true
//     },
//     qualification: {

//         type: String,
//         required: true,
//         trim: true

//     },
//     nominieeDetails: {
//         type: String,
//         required: true,
//         trim: true
//     }
// }
