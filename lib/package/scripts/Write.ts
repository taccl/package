import { loadPackageJson } from '../Load';
import { writePackageJson } from '../Write';
import { loadScripts } from './Load';
import { parseScripts, ScriptsType } from './Parse';
export function writeScripts (scripts?: string | ScriptsType) {
	let s: any = scripts;
	if (
		typeof s == 'string'
	) {
		s = loadScripts({
			path: s
		}).scripts;
	}
	s = parseScripts(s);
	let pkg: any = {};
	pkg = loadPackageJson();
	pkg.scripts = s;
	writePackageJson(pkg);
	return s;
}
