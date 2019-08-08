"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const next_1 = __importDefault(require("next"));
const isomorphic_unfetch_1 = __importDefault(require("isomorphic-unfetch"));
const is_development_util_1 = __importDefault(require("../config/utils/is_development.util"));
// Router Imports
const router_api_setup_1 = __importDefault(require("./utils/router/router.api.setup"));
async function main() {
    // Global variables
    global.fetch = isomorphic_unfetch_1.default;
    // Prepare Next Server
    const nextApp = next_1.default({ dev: is_development_util_1.default });
    global.nextApp = nextApp;
    const handle = nextApp.getRequestHandler();
    await nextApp.prepare();
    // Initialize Express JS Server
    const server = express_1.default();
    // Express Server Middleware
    server.use(morgan_1.default("dev"));
    /*** API Routes ***/
    router_api_setup_1.default(server);
    /** End API Routes */
    /** View Routes */
    server.get("/", (req, res) => {
        return nextApp.render(req, res, "/index", {});
    });
    server.get("/about", async (req, res) => {
        const response = await isomorphic_unfetch_1.default("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        return nextApp.render(req, res, "/about", { todos: data });
    });
    /** End View Routes */
    // Wildcard route for handling view requests with Next JS
    server.get("*", (req, res) => {
        handle(req, res);
    });
    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
}
// Call to the main function to begin the program
main().then(() => null);
//# sourceMappingURL=server.js.map