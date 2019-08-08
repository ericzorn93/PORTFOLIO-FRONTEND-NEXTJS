"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const primary_api_routes_1 = __importDefault(require("../../routes/api/primary.api.routes"));
function setupApiRoutes(server) {
    // Primary API Routes
    server.use(`/${process.env.API_VERSION_PREFIX}`, primary_api_routes_1.default);
}
exports.default = setupApiRoutes;
//# sourceMappingURL=router.api.setup.js.map