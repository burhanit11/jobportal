import mongoose, { Schema } from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "recruiter"],
      required: true,
    },
    profile: {
      bio: { type: String },
      skills: { type: String },
      resume: { type: String },
      resumeOrigineName: { type: String },
      company: { type: mongoose.Schema.ObjectId, ref: "Company" },
      picture: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

// password bcryptjs
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return null;
  this.password = await bcryptjs.hash(this.password, 10);
  next();
});

// compare password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcryptjs.compare(password, this.password);
};

// genrate token
userSchema.methods.genrateToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
