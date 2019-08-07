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
import primaryApiRoutes from "./routes/api/primary.api.routes";

async function main(): Promise<void> {
  // Global variables
  (global as any).fetch = fetch;

  // Prepare Next Server
  const app = next({ dev: isDevelopment });
  const handle = app.getRequestHandler();
  await app.prepare();

  // Initialize Express JS Server
  const server: ExpressApplication = express();

  // Express Server Middleware
  server.use(morgan("dev"));

  // API Routes
  server.use(`/${process.env.API_VERSION_PREFIX}`, primaryApiRoutes);

  // Wildcard route for handling view requests with Next JS
  server.get("*", (req: Request, res: Response) => {
    handle(req, res);
  });

  const PORT: number | string = process.env.PORT || 3000;
  server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
}

// Call to the main function to begin the program
main().then(() => null);
