import express from "express"
import {  editQue,delQue, showAllques,uploadQue} from "../controllers/questionController.js"

const router = express.Router()


router.get("/showQue",showAllques)
router.post("/uploadQue",uploadQue)
router.post("/delQue",delQue)
router.put("/editQue/:uid",editQue)



export default router
