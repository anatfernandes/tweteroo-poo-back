import { Tweet } from "../models/tweet-model.js";
import { userRepository } from "../repositories/user-repository.js";
import { tweetRepository } from "../repositories/tweet-repository.js";

class Controller {
	async create(req, res) {
		const { username } = req.body;

		try {
			const user = (await userRepository.findByUsername(username)).rows[0];
			if (!user) return res.status(404).send("Usuário não existe!");

			const tweet = new Tweet({ ...req.body, ...user });
			await tweetRepository.create({ ...tweet });

			res.status(201).send("OK, seu tweet foi criado!");
		} catch (error) {
			return res.status(400).send(error.message);
		}
	}

	async findByUsername(req, res) {
		const { username } = req.params;

		try {
			const tweetsDoUsuario = (await tweetRepository.listByUsername(username))
				.rows;
			res.status(200).send(tweetsDoUsuario);
		} catch (error) {
			return res.status(400).send("Um erro ocorreu!");
		}
	}

	async list(req, res) {
		const { page } = req.query;

		if (page && page < 1) {
			res.status(400).send("Informe uma página válida!");
			return;
		}

		try {
			const tweets = (await tweetRepository.list(page)).rows;
			res.status(200).send(tweets);
		} catch (error) {
			return res.status(400).send("Um erro ocorreu!");
		}
	}
}

export const tweetController = new Controller();
