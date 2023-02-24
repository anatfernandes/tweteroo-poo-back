import express from "express";
import { Controller } from "../controllers/sign-controller.js";

const signRoute = express.Router();
const controller = new Controller();

signRoute.post("/sign-up", controller.signUp);

export { signRoute };
