import express from "express"
import {  delQue, showAllques,uploadQue} from "../controllers/questionController.js"

const router = express.Router()


router.get("/showQue",showAllques)
router.post("/uploadQue",uploadQue)
router.delete("/delQue",delQue)



export default router
