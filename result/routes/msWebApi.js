import express from "express"
import{fetchAmbrelaData} from "../controllers/msWebApi.js"

const router = express.Router()

 router.post("/ambrela",fetchAmbrelaData);

 export default  router