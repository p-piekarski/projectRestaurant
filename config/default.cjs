<<<<<<< HEAD
const { nodeEnv } = require("./utils.cjs");
const { databaseConfig } = require("../database/dbConfig.cjs");
=======
const { nodeEnv } = require("./utils");
const { databaseConfig } = require("../database/dbConfig");
>>>>>>> d44607124b08d0ffa3f7e15c1cb1f36f385909fa

module.exports = {
  env: nodeEnv,
  is_test: false,
<<<<<<< HEAD
  name: "restaurant-manager-js",
  database: databaseConfig,
  options: {
    port: process.env.PORT,
    public_routes_prefix: "/api/public",
  },
  security: {
    key_path: process.env.HTTPS_KEY_PATH,
    cert_path: process.env.HTTPS_CERT_PATH,
  },
};
=======
  name: "projectrestaurant",
  database: databaseConfig,
};
>>>>>>> d44607124b08d0ffa3f7e15c1cb1f36f385909fa
