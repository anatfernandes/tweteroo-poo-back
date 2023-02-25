import express from "express";
import { tweetController } from "../controllers/tweet-controller.js";

const tweetRoute = express.Router();

tweetRoute
	.post("/tweets", tweetController.create)
	.get("/tweets/:username", tweetController.findByUsername)
	.get("/tweets", tweetController.list);

export { tweetRoute };
