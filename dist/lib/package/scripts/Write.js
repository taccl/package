"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeScripts = void 0;
const Load_1 = require("../Load");
const Write_1 = require("../Write");
const Load_2 = require("./Load");
const Parse_1 = require("./Parse");
function writeScripts(scripts) {
    let s = scripts;
    if (typeof s == 'string') {
        s = (0, Load_2.loadScripts)({
            path: s
        }).scripts;
    }
    s = (0, Parse_1.parseScripts)(s);
    let pkg = {};
    pkg = (0, Load_1.loadPackageJson)();
    pkg.scripts = s;
    (0, Write_1.writePackageJson)(pkg);
    return s;
}
exports.writeScripts = writeScripts;
