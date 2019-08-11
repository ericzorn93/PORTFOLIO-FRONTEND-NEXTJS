import { Application as ExpressApplication } from "express";

import primaryApiRoutes from "../../routes/api/primary.api.routes";

function setupApiRoutes(server: ExpressApplication): void {
  // Primary API Routes
  server.use(`/${process.env.API_VERSION_PREFIX}`, primaryApiRoutes);
}

export default setupApiRoutes;
