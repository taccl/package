"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadPackage = exports.loadPackageJson = void 0;
const loader_1 = require("@corcc/loader");
function loadPackageJson() {
    return (0, loader_1.loadJSON)({
        path: 'package'
    });
}
exports.loadPackageJson = loadPackageJson;
function loadPackage() {
    return (0, loader_1.loadModule)({
        path: 'Package'
    });
}
exports.loadPackage = loadPackage;
