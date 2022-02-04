"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadScripts = void 0;
const loader_1 = require("@corcc/loader");
function loadScripts({ path }) {
    return (0, loader_1.loadModule)({
        path: path !== null && path !== void 0 ? path : 'Scripts'
    });
}
exports.loadScripts = loadScripts;
