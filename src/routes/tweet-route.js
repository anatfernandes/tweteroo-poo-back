import express from "express";
import { Controller } from "../controllers/tweet-controller.js";

const tweetRoute = express.Router();
const controller = new Controller();

tweetRoute
	.post("/tweets", controller.create)
	.get("/tweets/:username", controller.findByUsername)
	.get("/tweets", controller.list);

export { tweetRoute };
