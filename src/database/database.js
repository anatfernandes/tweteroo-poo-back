import pg from "pg";

const { Pool } = pg;

const user = "postgres";
const password = "123";
const host = "localhost";
const port = 5432;
const database = "tweteroo_poo"; // caso troque o nome do banco, terás também que alterar o comando "dump" no package.json

const connection = new Pool({
	connectionString: `postgres://${user}:${password}@${host}:${port}/${database}`,
	ssl: {
		rejectUnauthorized: false,
	},
});

export { connection };
