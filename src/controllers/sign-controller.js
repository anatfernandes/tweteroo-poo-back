import { User } from "../models/user-model.js";
import { userRepository } from "../repositories/user-repository.js";

class Controller {
	async signUp(req, res) {
		try {
			const user = new User({ ...req.body });
			await userRepository.create({ ...user });
			res.status(201).send("OK, deu tudo certo!");
		} catch (error) {
			res.status(400).send(error.message);
		}
	}
}

export const signController = new Controller();
