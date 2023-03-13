import express from "express"

import { retriveDataFromExcel } from "../controllers/excel.js"
import { dirname} from 'path';
 import { upload } from "../controllers/excel.js";
 const router = express.Router()

import { fileURLToPath} from 'url';
  import path from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
router.use(express.static(path.resolve(__dirname,"./public")))


router.post("/retriveDataFromExcel",upload.single("file"),retriveDataFromExcel)


export default router
