import config from "config";
import Server from "./Server.js";
import routes from "./routes/index.js";

console.log(config);
const server = new Server(
  config.cors_options,
  config.options.public_routes_prefix,
  config.options.private_routes_prefix
);

server.start(
  config.options.port,
  config.security.key_path,
  config.security.cert_path
);

server.addRoutes(routes);