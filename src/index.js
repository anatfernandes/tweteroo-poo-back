import chalk from "chalk";
import cors from "cors";
import express, { json } from "express";
import { signRoute, tweetRoute } from "./routes/index.js";

const app = express();

app.use(cors());
app.use(json());

app.use(signRoute).use(tweetRoute);

app.listen(5001, () => {
	console.log(chalk.bold.blue("Servidor funfando de boas!!!"));
});
