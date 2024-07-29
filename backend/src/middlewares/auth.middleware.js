import JWT from "jsonwebtoken";
import { User } from "../models/user.models.js";

export const verifyJWT = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.header("authorization")?.replace("Bearer", "");

    if (!token) {
      return res.status(400).json({ message: "Userr is not authorized" });
    }

    const decodedToken = JWT.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (!decodedToken) {
      return res.status(400).json({ message: "Invalid Token!" });
    }
    const user = await User.findById(decodedToken._id).select("-password");
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};
