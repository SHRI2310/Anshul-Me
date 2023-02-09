import express from "express"
import {  showAllques,uploadQue} from "../controllers/questionController.js"

const router = express.Router()


router.get("/showQue",showAllques)
router.post("/uploadQue",uploadQue)


export default router
