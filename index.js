import mongoose from "mongoose";
import cors from 'cors'
import express from "express";
import "dotenv/config";
import { userRoute } from "./route/UserRouter.js";
const app = express();
app.use(express.json());
app.use("/",userRoute)
app.use(cors())
mongoose
  .connect(process.env.KEY)
  .then(() => console.log("Connected!"))
  .catch((err) => console.log("Not Connected!"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
//aa