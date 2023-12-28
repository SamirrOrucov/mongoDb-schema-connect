import { Router } from "express";

import {
  createUser,
  deleteByIdUser,
  getAllUsers,
  getByIdUser,
} from "../controller/UserController.js";
import { UserModel } from "../model/UserModel.js";
export const userRoute = Router();
userRoute.get("/api/users", getAllUsers);
userRoute.get("/api/users:id", getByIdUser);
userRoute.post("/api/users", createUser);
userRoute.delete("/api/users:id");
userRoute.put("/api/users:id", deleteByIdUser);
