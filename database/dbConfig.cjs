<<<<<<< HEAD

require("../config/utils.cjs");

module.exports = {
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	port: process.env.DB_PORT,
	dialect: process.env.DB_DIALECT,
	native: true,
=======
require("../config/utils.cjs");

module.exports = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  native: true,
>>>>>>> d44607124b08d0ffa3f7e15c1cb1f36f385909fa
};