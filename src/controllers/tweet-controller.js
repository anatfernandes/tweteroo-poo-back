import { tweets, usuarios } from "../database/database.js";
import { Tweet } from "../models/tweet-model.js";

export class Controller {
	create(req, res) {
		const { username } = req.body;

		try {
			const user = usuarios.find((user) => user.username === username);
			if (!user) return res.status(404).send("Usuário não existe!");

			const tweet = new Tweet({ ...req.body, ...user });
			tweets.push(tweet);

			res.status(201).send("OK, seu tweet foi criado!");
		} catch (error) {
			return res.status(400).send(error.message);
		}
	}

	findByUsername(req, res) {
		const { username } = req.params;

		const tweetsDoUsuario = tweets.filter(
			(tweet) => tweet.username === username
		);

		res.status(200).send(tweetsDoUsuario);
	}

	list(req, res) {
		const { page } = req.query;

		if (page && page < 1) {
			res.status(400).send("Informe uma página válida!");
			return;
		}
		const limite = 10;
		const start = (page - 1) * limite;
		const end = page * limite;

		if (tweets.length <= 10) {
			return res.send([...tweets].reverse());
		}

		res.status(200).send([...tweets].reverse().slice(start, end));
	}
}
