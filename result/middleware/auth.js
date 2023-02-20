import jwt from "jsonwebtoken"
import { Admin } from "../models/adminModel/adminDetails.js"


export const isAuthenticated = async (req,res,next)=>{
    try {
        const {adminToken} = req.cookies

        if(!adminToken){return res.status(401).json({success:false, message:"You Are Not  an Admin or Login 1st "})}

        const decoded = await jwt.verify(adminToken,process.env.JWT_SECRET )

        req.admin = await Admin.findById(decoded._id)
        next()
    } catch (error) {
        res.status(500).json({success:false, messsage:error.message})
    }
}