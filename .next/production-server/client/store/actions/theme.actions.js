"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theme_types_1 = require("../types/theme.types");
exports.loadThemesAction = (themes, selectedTheme) => {
    console.log("theme action called");
    return async (dispatch) => {
        dispatch({
            type: theme_types_1.LOAD_THEMES,
            payload: {
                lightMode: themes.lightMode,
                darkMode: themes.darkMode,
                selectedTheme: selectedTheme || "darkMode",
                completeThemes: themes
            }
        });
    };
};
//# sourceMappingURL=theme.actions.js.map