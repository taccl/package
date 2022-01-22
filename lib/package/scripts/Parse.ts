export type ScriptsType = {
	[name: string]: any;
}
export class ParseScripts implements ScriptsType {
	_scripts: any = {};
	key: any;
	constructor (scripts: ScriptsType) {
		this.parseScripts(scripts);
		return this._scripts;
	}

	prevKey () {
		const last = this.key.lastIndexOf(':');
		this.key = this.key.substring(0, last);
		return this.key;
	}

	parseScripts (scripts: ScriptsType): any {
		if (typeof scripts == 'string') {
			return scripts;
		}
		return Object.entries(scripts).map(([k, v]: any) => {
			this.key = this.key ? this.key : '';
			this.key += `${this.key ? ':' : ''}${k}`;
			const parsedValue: any = this.parseScripts(v);
			const _k: any = this.key;
			this.key = this.prevKey();
			if (typeof v == 'string') {
				this._scripts[_k] = v;
			}
			return [_k, parsedValue];
		});
	}
}
export function parseScripts (scripts: any) {
	const parsedScripts = new ParseScripts(scripts);
	return parsedScripts;
}
