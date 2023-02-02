import{ model} from "../../models/adminModel/adminDetails.js"
import bcrypt from"bcrypt"
import jwt  from "jsonwebtoken"
import { Mcq } from "../../models/adminModel/mcqModel.js"

import { isAnswer } from "../../utils/validation.js"
import { test } from "../../models/testmodel.js"


export const register = async(req,res)=>{
    try {
        const data =req.body
    const{
        title,name,middleName,lastName,address,mobile, email,password,
         bankName,accountName,accountNumber,ifsc,panCardNo,gstNumber,
         adharNumber,qualification,nominieeDetails
        }= data

        
        let newArr =[  "title","name","middleName","lastName","address","mobile", "email","password",
            "bankName","accountName","accountNumber","ifsc","panCardNo","gstNumber",
            "adharNumber","qualification","nominieeDetails"] 
                     

       
         for ( let field of newArr){
        //  console.log(data[field]);
            if(!data[field]){
                return res.status(400).json({status:false,message:`${field} is mandatory`})
            }
         }

        let user = await model.findOne({$or: [ {mobile }, { email }]})
        if(user){
            return res.status(400).json({status:false,message:"user already exist with this number or email"})
        }

         let salt = await bcrypt.genSalt(10)

        data.password= await bcrypt.hash(password,salt)

         user = await model.create(data)

         let token = jwt.sign({
            _id: user._id,
        }, process.env.JWT_SECRET);
    
        let options = {
            httpOnly: true,
            expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)
        }
    
        return res.status(201).cookie("token",token,options).json({ status: true, data: user,token:token })
    } catch (error) {
        return res.status(500).json({status:false,message:error.message})
    }
}

export const login = async (req,res)=>{
try {
    
    const data = req.body;
    const {mobile,password}=data;

     let user = await model.findOne({mobile});
     if(!user){
         return res.status(400).json({status:false,message:"Invalid Password or phone "})
        }
         console.log(user)
        let checkPass;
     checkPass =  await bcrypt.compare(password, user.password)
     console.log(password, user.password);
     if(!checkPass){
         return res.status(400).json({status:false,message:"Invalid Password or phone"})
        }

     let token = jwt.sign({
        _id: user._id,
    }, process.env.JWT_SECRET);

    let options = {
        httpOnly: true,
        expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)
    }

    return res.status(200).cookie("token", token, options).json({ status: true, data: user, token: token })

} catch (error) {
    return res.status(500).json({status:false,message:error.message})
}
 
}


export const logout = async (req, res) => {
    try {
        res.status(200).cookie("token", null, { expires: new Date(Date.now()) })
            .json({ success: true, message: "User Logedout" })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}



export const  uploadQue = async (req,res)=>{
try {
    let data = req.body;
    let  {question,A,B,C,D,Answer}=data;
    

    let nArr=["question","A","B","C","D","Answer"];
    for( let field of nArr){
        if(!data[field]){
            return res.status(400).json({status:false,message:`${field} is mandatory`})

        }
     

    }; 

    
    if (!isAnswer(Answer)) {
        return res
          .status(400)
          .json({ status: false, message: "Enter valid answer as per Enum" });
      }
  
    let checkQueCount = await Mcq.find().count()
    //  console.log(checkQueCount,checkQueCount<4)

     if(checkQueCount > 40){
        return res.status(400).json({status:false,message:" Sorry Only 40 Questions can be added !"})
     }

let addQues =await Mcq.create(data);

return res.status(201).json({status:true,message:"Question Added"})

} catch (error) {
    return res.status(500).json({
        success: false,
        message: error.message
    })
}
   
}

export  const showAllques = async(req,res)=>{
     
  try {
    const showAllQue = await Mcq.find()

    return res.status(200).json({status:true,data:showAllQue})
     
  } catch (error) {
    return res.status(500).json({
        success: false,
        message: error.message
    })
  }

}


export const deleteAll = async(req,res)=>{

    // const a = await Mcq.remove({})

    return res.status(200).json({message:"deleted"})
}



// export const testApi =async(req,res)=>{

//     let data = req.body;
//      const {queId} =data;

//      let ques = await Mcq.findById({queId});




// }


export const generateCertificate = async(req,res)=>{


    //  const getAgent = await test. 


        // const data =req.body
        const xyz ="helllo"
        
        res.render("index",{
            CandidateName:xyz,
            pan:"9876543"
        })
    

    
     

}

