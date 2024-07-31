import express from "express";
// import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controllers.js";

const router = express.Router();

router.route("/registerCompany").post(verifyJWT, registerCompany);
router.route("/getCompany").get(verifyJWT, getCompany);
router.route("/getCompanyById/:id").get(verifyJWT, getCompanyById);
router.route("/updateCompany/:id").put(verifyJWT, updateCompany);

export default router;
