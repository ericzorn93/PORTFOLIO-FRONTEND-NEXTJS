"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_devtools_extension_1 = require("redux-devtools-extension");
const redux_thunk_1 = __importDefault(require("redux-thunk"));
const reducers_1 = __importDefault(require("./reducers"));
const middleware = [redux_thunk_1.default];
const composeEnhancers = redux_devtools_extension_1.composeWithDevTools({});
// Determine if devtools need to be present, based on the node environment
let loadMiddleware;
if (process.env.NODE_ENV !== "production") {
    loadMiddleware = composeEnhancers(redux_1.applyMiddleware(...middleware));
}
else {
    loadMiddleware = redux_1.compose(redux_1.applyMiddleware(...middleware));
}
exports.default = () => redux_1.createStore(reducers_1.default, loadMiddleware);
//# sourceMappingURL=index.js.map