import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: "dygkwfork",
  api_key: "176761614346139",
  api_secret: "<your_api_secret>", // Click 'View Credentials' below to copy your API secret
});

const uploadOnCloudinary = async (fileLocalPath) => {
  try {
    if (!fileLocalPath) return null;

    const response = cloudinary.uploader.upload(fileLocalPath, {
      resource_type: "auto",
    });

    console.log("file uplaod to cloudinary successfully.");
    return response;
  } catch (error) {
    fs.unlinkSync(fileLocalPath);
  }
};

export default uploadOnCloudinary;
