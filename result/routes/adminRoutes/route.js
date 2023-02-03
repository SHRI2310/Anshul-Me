import express from "express";

import { login, logout, register, uploadQue  } from "../../controllers/registerAdmin/adminController.js";

const router = express.Router()

router.post("/register",register)
router.post("/login",login)
router.get("/logout",logout)
router.post("/uploadQue",uploadQue)
// router.route("/delete").delete(deleteAll)


export  default  router