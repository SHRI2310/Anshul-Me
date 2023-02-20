import{ Admin} from "../../models/adminModel/adminDetails.js"
import bcrypt from"bcrypt"
import jwt  from "jsonwebtoken"
import { isAnswer } from "../../utils/validation.js"
import { Agent } from "../../models/agentData.js"
import tryCatch from "../../middleware/tryCatch.js"

export const register = tryCatch(async(req,res,next)=>{
   
        const data =req.body
    const{title,name,lastName, email,password}= data

        
        let newArr =["title","name","lastName","email","password"] 
                     

       
         for ( let field of newArr){
        //  console.log(data[field]);
            if(!data[field]){
                return next(new Error(` is missing`, 400))
            }
         }

        let  admin = await Admin.findOne({ email })
      
        if(admin){
            return next(new Error(" user already exist with this email", 400))
        }

         let salt = await bcrypt.genSalt(10)

        data.password= await bcrypt.hash(password,salt)

         admin= await Admin.create(data)

        return res.status(201).json({ status: true, message:"ADMIN REGISTERED SUCCESSFULLY" })
    
    })
    


export const login = tryCatch(async (req,res,next)=>{

    const data = req.body;
    const {email,password}=data;

     let admin = await Admin.findOne({email});
     if(!admin){
        return next(new Error(" Invalid Password or email  ", 400))
        }
        let checkPass;
     checkPass =  await bcrypt.compare(password, admin.password)
    //  console.log(password, user.password);
     if(!checkPass){
        return next(new Error("Invalid Password or email  ", 400))
        }

     let token = jwt.sign({
        _id: admin._id,
    }, process.env.JWT_SECRET);

    let options = {
        httpOnly: true,
        expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    }

    return res.status(200).cookie("adminToken", token, options).json({ status: true, message:"Admin Login Seccessfully"})


})


export const logout = tryCatch(async (req, res,next) => {
    
       return res.status(200).cookie("adminToken", null, { expires: new Date(Date.now()) })
            .json({ success: true, message: "User Logedout" })
  
})








export const deleteAll = async(req,res)=>{

    // const a = await Mcq.remove({})

    return res.status(200).json({message:"deleted"})
}




