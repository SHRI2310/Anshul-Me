import express from "express"
import {  showTest,editQue,delQue, showAllques,uploadQue, ansCheck} from "../controllers/questionController.js"
import { isAuthenticated } from "../middleware/auth.js"
const router = express.Router()


router.get("/showQue",showAllques)
router.get("/showTest",showTest)

router.post("/uploadQue",uploadQue)
router.post("/delQue",delQue)
router.put("/editQue/:uid",editQue)
router.post("/ans",ansCheck)



export default router
