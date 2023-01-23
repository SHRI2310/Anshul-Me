import mongoose from "mongoose"
const objectId = mongoose.Schema.Types.ObjectId

const quoteSchema = new mongoose.Schema({
     salesChannelCode:{
        type:String,
        trim:true
    },
    carrierCode:{
        type:String,
       required:true
    },
insurerName:{
    type:String,
    required:true,
},
frequency:{
    type:String,
    required:true ,
    enum:["Monthly","Half yearly","Yearly"]  
},
premium:{
    type:String,
    required:true
   
},
term:{
    type:String,
    required:true
   
},

ppt:{
    type:String,
    required:true
   
},
payOutFrequency:{
    type:String,
    required:true
},
userId : {
    type:objectId,
    ref:"User",
    required:true,

},

})

export  default mongoose.model("Quote",quoteSchema)