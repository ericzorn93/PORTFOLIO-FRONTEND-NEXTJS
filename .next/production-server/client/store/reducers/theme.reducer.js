"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theme_types_1 = require("../types/theme.types");
const initialThemeState = {
    completeThemes: {},
    lightMode: {},
    darkMode: {},
    selectedTheme: "",
    activeTheme: {}
};
const themeReducer = (state = initialThemeState, action) => {
    switch (action.type) {
        case theme_types_1.LOAD_THEMES:
            return {
                ...state,
                darkMode: action.payload.darkMode,
                lightMode: action.payload.lightMode,
                completeThemes: action.payload.completeThemes,
                selectedTheme: action.payload.selectedTheme,
                activeTheme: action.payload.completeThemes[action.payload.selectedTheme]
            };
        case theme_types_1.UPDATE_SELECTED_THEME:
            return {
                ...state,
                selectedTheme: action.payload
            };
        default:
            return state;
    }
};
exports.default = themeReducer;
//# sourceMappingURL=theme.reducer.js.map