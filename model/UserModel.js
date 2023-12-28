import mongoose, { Schema } from "mongoose";

 const User = new Schema({
    username: String,
    email: String,
    password: String,
    age: Number,
    isMarried: Boolean,
  });
  export const UserModel = mongoose.model("UserManagment", User);