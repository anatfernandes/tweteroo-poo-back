import express from "express";
import { signController } from "../controllers/sign-controller.js";

const signRoute = express.Router();

signRoute.post("/sign-up", signController.signUp);

export { signRoute };
