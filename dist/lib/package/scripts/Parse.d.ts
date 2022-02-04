export declare type ScriptsType = {
    [name: string]: any;
};
export declare class ParseScripts implements ScriptsType {
    _scripts: any;
    key: any;
    constructor(scripts: ScriptsType);
    prevKey(): any;
    parseScripts(scripts: ScriptsType): any;
}
export declare function parseScripts(scripts: any): ParseScripts;
