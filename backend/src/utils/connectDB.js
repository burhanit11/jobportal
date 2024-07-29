import mongoose from "mongoose";

const connectDB = async () => {
  // console.log(process.env.MONGDB_URL, "????????");
  try {
    await mongoose.connect(process.env.MONGDB_URL);
    console.log("Connected Database.");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
