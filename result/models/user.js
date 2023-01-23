import mongoose from "mongoose";




let userSchema = new mongoose.Schema({
    
        fName:{
            type:String,
            required:true
        },
        lName:{
            type:String,
            required:true
        },
        dateOfBirth:{
            type:Date,
            default:Date.now()
        },
        mobile:{
            type:String,
            required:true,
            unique:true,
        
        },
        email:{
            type:String,
            required:true,
            unique:true,

        }
        
    
})
 export default mongoose.model("Users",userSchema)