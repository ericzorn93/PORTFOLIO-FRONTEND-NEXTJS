"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get("/", (req, res) => {
    return res.status(200).json({ Welcome: "API V1 Reached!" });
});
exports.default = router;
//# sourceMappingURL=primary.api.routes.js.map