import { UserModel } from "../model/UserModel.js";

export const getAllUsers=async (req, res) => {
    const users = await UserModel.find({});
    res.send(users);
  }
  export const getByIdUser= async (req, res) => {
    const { id } = req.params;
    const users = await UserModel.findById(id);
    res.send(users);
  }
  export const createUser= async (req, res) => {
    const { username, email, password, age, isMarried } = req.body;
    const newUser = new UserModel({ username, email, password, age, isMarried });
    await newUser.save();
    res.send("new user added");
  }
  export const deleteByIdUser= async (req, res) => {
    const { id } = req.params;
    const users = await UserModel.findByIdAndDelete(id);
    res.send(users);
  }