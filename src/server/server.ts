import "dotenv/config";
import express, {
  Request,
  Response,
  Application as ExpressApplication
} from "express";
import morgan from "morgan";
import next from "next";
import fetch from "isomorphic-unfetch";

import isDevelopment from "../config/utils/is_development.util";

// Router Imports
import setupApiRoutes from "./utils/router/router.api.setup";
import setupViewRouter from "./routes/views/primary.view.routes";

async function main(): Promise<void> {
  // Global variables∏
  (global as any).fetch = fetch;

  // Prepare Next Server
  const nextApp = next({ dev: isDevelopment });
  (global as any).nextApp = nextApp;
  const handle = nextApp.getRequestHandler();
  await nextApp.prepare();

  // Initialize Express JS Server
  const server: ExpressApplication = express();

  // Express Server Middleware
  server.use(morgan("dev"));

  /*** API Routes ***/
  setupApiRoutes(server);
  /** End API Routes */

  /** View Routes */
  setupViewRouter(nextApp);
  /** End View Routes */

  // Wildcard route for handling view requests with Next JS
  server.get("*", (req: Request, res: Response) => {
    handle(req, res);
  });

  const PORT: number | string = process.env.PORT || 3000;
  server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
}

// Call to the main function to begin the program
main().then(() => null);
