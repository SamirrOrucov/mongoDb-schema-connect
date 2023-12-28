import mongoose, { Schema } from "mongoose";
import express from "express";
import "dotenv/config";
import { boolean } from "webidl-conversions";
const app = express();
app.use(express.json());

const User = new Schema({
  username: String,
  email: String,
  password: String,
  age: Number,
  isMarried: Boolean,
});
const UserModel = mongoose.model("UserManagment", User);

app.get("/", async (req, res) => {
  const users = await UserModel.find({});
  res.send(users);
});
app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const users = await UserModel.findById(id);
  res.send(users);
});
app.post("/", async (req, res) => {
  const { username, email, password, age, isMarried } = req.body;
  const newUser = new UserModel({ username, email, password, age, isMarried });
  await newUser.save();
  res.send("new user added");
});
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const users = await UserModel.findByIdAndDelete(id);
  res.send(users);
});
app.put("/:id", async (req, res) => {
  const { username, email, password, age,isMarried  } = req.body;
  const { id } = req.params;
  const users = await UserModel.findByIdAndUpdate(id, {
    username,
    email,
    password,
    age,
    isMarried,
  });

  await users.save();
  res.send("user updated");
});
mongoose
  .connect(process.env.KEY)
  .then(() => console.log("Connected!"))
  .catch((err) => console.log("Not Connected!"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
