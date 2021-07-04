import config from "config";

import databaseProvider from "./DatabaseProvider.js";
import Server from "./Server.js";
import routes from "./routes/index.js";
import { MenuItemsService } from "./services/menuitems.js";

const run = async () => {
    try {
        await databaseProvider.testConnection();

        const server = new Server(
            config.cors_options,
            config.options.public_routes_prefix,
            config.options.private_routes_prefix
          );
          
          server.addRoutes(routes);

          await server.start(
            config.options.port,
            config.security.key_path,
            config.security.cert_path
          );

          const menuItems = await MenuItemsService.readAll()
          const menuLength = menuItems.length
          console.log(menuItems)
          console.log(menuLength)
          if (menuLength<12){
            throw `Incomplete configuration error, menuItems.length:  ${menuLength} < 12`;
          }
          

    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

run();