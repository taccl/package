"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseScripts = exports.ParseScripts = void 0;
class ParseScripts {
    constructor(scripts) {
        this._scripts = {};
        this.parseScripts(scripts);
        return this._scripts;
    }
    prevKey() {
        const last = this.key.lastIndexOf(':');
        this.key = this.key.substring(0, last);
        return this.key;
    }
    parseScripts(scripts) {
        if (typeof scripts == 'string') {
            return scripts;
        }
        return Object.entries(scripts).map(([k, v]) => {
            this.key = this.key ? this.key : '';
            this.key += `${this.key ? ':' : ''}${k}`;
            const parsedValue = this.parseScripts(v);
            const _k = this.key;
            this.key = this.prevKey();
            if (typeof v == 'string') {
                this._scripts[_k] = v;
            }
            return [_k, parsedValue];
        });
    }
}
exports.ParseScripts = ParseScripts;
function parseScripts(scripts) {
    const parsedScripts = new ParseScripts(scripts);
    return parsedScripts;
}
exports.parseScripts = parseScripts;
