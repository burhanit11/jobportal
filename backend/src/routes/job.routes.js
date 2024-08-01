import express from "express";
// import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  getAdminJob,
  getAllJob,
  getJobById,
  postJob,
} from "../controllers/job.controllers.js";

const router = express.Router();

router.route("/postJob").post(verifyJWT, postJob);
router.route("/getAllJob").get(verifyJWT, getAllJob);
router.route("/getJobById/:id").get(verifyJWT, getJobById);
router.route("/getAdminJob").get(verifyJWT, getAdminJob);

export default router;
