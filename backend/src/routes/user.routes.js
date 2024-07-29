import express from "express";
import {
  login,
  logout,
  singup,
  update,
} from "../controllers/users.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/singup").post(singup);
router.route("/login").post(login);
router.route("/logout").post(verifyJWT, logout);
router.route("/update").put(verifyJWT, upload.single("picture"), update);

export default router;
