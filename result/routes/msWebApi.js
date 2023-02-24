import express from "express"
import{fetchAmbrelaData, generateCertificate, getAgentProfile,getCustomerProfile, preFill} from "../controllers/msWebApi.js"

const router = express.Router()

 router.post("/ambrela",fetchAmbrelaData);
 router.get("/api/getAgentProfile",getAgentProfile)
 router.get("/api/getCustomerProfile",getCustomerProfile)
router.get("/certificate",generateCertificate)
router.get("/api/customerByPosId",preFill)

 export default  router