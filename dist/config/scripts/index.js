"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loader_1 = require("@corcc/loader");
const path_1 = __importDefault(require("path"));
const { writeScripts } = (0, loader_1.loadModule)({
    path: './lib'
});
const scripts = writeScripts(path_1.default.join(__dirname.replace(process.cwd(), ''), 'Config'));
console.log('scripts:');
console.log(scripts);
