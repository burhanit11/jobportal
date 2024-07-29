import dotenv from "dotenv";
import { app } from "./src/app.js";
import connectDB from "./src/utils/connectDB.js";

dotenv.config();
const PORT = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is Running on Port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
