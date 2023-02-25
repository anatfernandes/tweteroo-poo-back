import { connection } from "../database/database.js";

class TweetRepository {
	create({ username, tweet, avatar }) {
		return connection.query(
			`
			    INSERT INTO
                    tweets
                (username, avatar, tweet)
                VALUES ($1, $2, $3);
            `,
			[username, avatar, tweet]
		);
	}

	listByUsername(username) {
		return connection.query(
			`
			    SELECT
					*
                FROM tweets
                WHERE username = $1
                ORDER BY id DESC;
            `,
			[username]
		);
	}

	list(page = 1) {
		return connection.query(
			`
			    SELECT
					*
                FROM tweets
                ORDER BY id DESC
                OFFSET $1
                LIMIT 10;
            `,
			[(page - 1) * 10]
		);
	}
}

export const tweetRepository = new TweetRepository();
