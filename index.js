// app.js
import express from "express";
import appRouter from "./app.Routes.js";
import { connect } from "mongoose";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3000;

connect("mongodb+srv://Isha:yPqIRIcKKGAk1S7n@cluster0.kfxakyz.mongodb.net/")
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));

app.use(appRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// 2C0oxypgIe0P5WTi  mongopassword

// yPqIRIcKKGAk1S7n isha mongopassword

// mongodb+srv://abhishek06verma13:<password>@cluster0.hm6jrga.mongodb.net/
