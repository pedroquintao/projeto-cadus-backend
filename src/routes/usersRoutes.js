import express from "express";
import UserController from "../controller/userController.js";

const routes = express.Router();

routes.get("/users", UserController.listUsers);
routes.post("/users", UserController.registerUser);
routes.patch("/users/:id", UserController.updateUser);
routes.delete("/users/:id", UserController.deleteUser);

export default routes;