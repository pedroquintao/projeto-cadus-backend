import express from "express";
import UserController from "../controller/userController.js";

const routes = express.Router();

routes.get("/users", UserController.listUsers);
routes.post("/users", UserController.registerUser);

export default routes;