import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
import companyRouter from "./routes/company.routes.js";
import jobRouter from "./routes/job.routes.js";

const app = express();

var corsOptions = {
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  origin: "http://localhost:3000",
  Credential: true,
  optionsSuccessStatus: 200,
};

// middleware
app.use(express.urlencoded({ extended: true, limit: "61kb" }));
app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors(corsOptions));

// api
app.use("/api/v1/users", userRouter);
app.use("/api/v1/company", companyRouter);
app.use("/api/v1/job", jobRouter);

export { app };
