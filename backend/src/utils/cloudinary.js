import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: "dygkwfork",
  api_key: "176761614346139",
  api_secret: "XG5mWRKmQePI3W6kt5LXFgWzllE",
});

const uploadOnCloudinary = async (fileLocalPath) => {
  try {
    if (!fileLocalPath) return null;

    const response = await cloudinary.uploader.upload(fileLocalPath, {
      resource_type: "auto",
    });

    console.log("file uplaod to cloudinary successfully.");
    return response;
  } catch (error) {
    fs.unlinkSync(fileLocalPath);
  }
};

export default uploadOnCloudinary;
