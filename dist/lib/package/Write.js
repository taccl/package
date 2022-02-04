"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writePackageJson = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function writePackageJson(pkgData) {
    const pkgJsonPath = path_1.default.join(process.cwd(), 'package.json');
    fs_1.default.writeFileSync(pkgJsonPath, JSON.stringify(pkgData, null, 2));
}
exports.writePackageJson = writePackageJson;
