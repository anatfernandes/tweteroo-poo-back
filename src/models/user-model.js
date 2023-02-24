export class User {
	constructor({ username, avatar }) {
		const imageFormatRegex =
			/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/;

		if (!username || !avatar) {
			throw new Error("Todos os campos são obrigatórios!");
		}
		if (typeof username !== "string" || typeof avatar !== "string") {
			throw new Error("Todos os campos devem ser string!");
		}
		if (!avatar.match(imageFormatRegex)) {
			throw new Error("O avatar deve ser uma URL de imagem válida!");
		}

		this.username = username;
		this.avatar = avatar;

		return this;
	}
}
