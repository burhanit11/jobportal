import express from "express";
// import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { postJob } from "../controllers/job.controllers.js";

const router = express.Router();

router.route("/postJob").post(verifyJWT, postJob);

export default router;
