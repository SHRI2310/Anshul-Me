import express from "express"
import{fetchAmbrelaData, getAgentProfile,getCustomerProfile} from "../controllers/msWebApi.js"

const router = express.Router()

 router.post("/ambrela",fetchAmbrelaData);
 router.get("/api/getAgentProfile",getAgentProfile)
 router.get("/api/getCustomerProfile",getCustomerProfile)


 export default  router