"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scripts = void 0;
exports.scripts = {
    config: {
        scripts: 'ts-node ./config/scripts'
    },
    build: {
        dist: 'tsc',
        tsc: 'tsc'
    },
    lint: {
        fix: 'eslint --fix --ext .ts --ext .tsx .',
        check: 'eslint --ext .ts --ext .tsx .'
    }
};
