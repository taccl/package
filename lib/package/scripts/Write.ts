import { loadPackageJson } from '../Load';
import { writePackageJson } from '../Write';
import { loadScripts } from './Load';
import { parseScripts, ScriptsType } from './Parse';
export function writeScripts (scripts?: ScriptsType) {
	let s = scripts;
	s = s ?? loadScripts().scripts;
	s = parseScripts(s);
	let pkg: any = {};
	pkg = loadPackageJson();
	pkg.scripts = s;
	writePackageJson(pkg);
}
