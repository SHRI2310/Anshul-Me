import express from "express"
import{fetchAmbrelaData, generateCertificate, getAgentProfile,getAllAgents,getCustomerProfile, preFill} from "../controllers/msWebApi.js"

const router = express.Router()

 router.post("/ambrela",fetchAmbrelaData);
 router.get("/api/getAgentProfile",getAgentProfile)
 router.get("/api/getCustomerProfile",getCustomerProfile)
router.get("/certificate",generateCertificate)
router.get("/api/preFill",preFill)
router.get("/api/getAllAgents",getAllAgents)
 export default  router