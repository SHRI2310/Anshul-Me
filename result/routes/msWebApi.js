import express from "express"
import{fetchAmbrelaData, generateCertificate, getAgentProfile,getCustomerProfile} from "../controllers/msWebApi.js"

const router = express.Router()

 router.post("/ambrela",fetchAmbrelaData);
 router.get("/api/getAgentProfile",getAgentProfile)
 router.get("/api/getCustomerProfile",getCustomerProfile)
 
router.get("/certificate",generateCertificate)


 export default  router