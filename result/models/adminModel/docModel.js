import mongoose from "mongoose";

  const docSchema= new mongoose.Schema({

panCard:{
   
        type:String,
        required:true,
   
},
adharCard:{
    type:String,
    required:true,
},
yourPhoto:{
    type:String,
    required:true,
},
uploadBankDoc:{
    type:String,
    required:true,
},
qualificationCertificate:{
    type:String,
    required:true,
}


  })

  export const doc =("Doc",docSchema)
