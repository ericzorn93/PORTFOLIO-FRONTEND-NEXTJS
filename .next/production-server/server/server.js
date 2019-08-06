"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import cors from "cors/config";
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const next_1 = __importDefault(require("next"));
const isomorphic_unfetch_1 = __importDefault(require("isomorphic-unfetch"));
const is_development_util_1 = __importDefault(require("../config/utils/is_development.util"));
async function main() {
    // Global variables
    global.fetch = isomorphic_unfetch_1.default;
    // Prepare Next Server
    const app = next_1.default({ dev: is_development_util_1.default });
    const handle = app.getRequestHandler();
    await app.prepare();
    // Initialize Express JS Server
    const server = express_1.default();
    // Express Server Middleware
    server.use(morgan_1.default("dev"));
    // Routing
    server.get("*", (req, res) => {
        handle(req, res);
    });
    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
}
// Call to the main function to begin the program
main().then(() => null);
//# sourceMappingURL=server.js.map