import express from "express";
// import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  applyJob,
  getApplicats,
  getAppliedJob,
  updateStatus,
} from "../controllers/application.controllers.js";

const router = express.Router();

router.route("/applyJob/:id").get(verifyJWT, applyJob);
router.route("/getAppliedJob").get(verifyJWT, getAppliedJob);
router.route("/:id/getApplicats").get(verifyJWT, getApplicats);
router.route("/updateStatus/:id").put(verifyJWT, updateStatus);

export default router;
