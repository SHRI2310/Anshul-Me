import express from "express"
import multer from "multer"
import { retriveDataFromExcel } from "../controllers/excel.js"
import { dirname} from 'path';
import { fileURLToPath} from 'url';
  import path from "path";
const router = express.Router()
const __dirname = dirname(fileURLToPath(import.meta.url));
router.use(express.static(path.resolve(__dirname,"./public")))
const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,"./public/uploads")
    },
    filename:(req,file,cb)=>{
      cb(null,file.originalname)
    }
  })
   const upload =multer({storage:storage})

router.post("/retriveDataFromExcel",upload.single("file"),retriveDataFromExcel)


export default router
