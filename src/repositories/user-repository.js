import { connection } from "../database/database.js";

class UserRepository {
	create({ username, avatar }) {
		return connection.query(
			`
			    INSERT INTO
                    users
                (username, avatar)
                VALUES ($1, $2);
            `,
			[username, avatar]
		);
	}

	findByUsername(username) {
		return connection.query(
			`
			    SELECT
					*
                FROM users
                WHERE username = $1;
            `,
			[username]
		);
	}
}

export const userRepository = new UserRepository();
