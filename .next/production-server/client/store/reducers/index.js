"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const theme_reducer_1 = __importDefault(require("./theme.reducer"));
const rootReducer = redux_1.combineReducers({
    themes: theme_reducer_1.default
});
exports.default = rootReducer;
//# sourceMappingURL=index.js.map