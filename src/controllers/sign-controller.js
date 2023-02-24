import { usuarios } from "../database/database.js";
import { User } from "../models/user-model.js";

export class Controller {
	signUp(req, res) {
		try {
			const user = new User({ ...req.body });
			usuarios.push(user);
			res.status(201).send("OK, deu tudo certo!");
		} catch (error) {
			res.status(400).send(error.message);
		}
	}
}
