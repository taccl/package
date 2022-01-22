import fs from 'fs';
import path from 'path';
export function writePackageJson (pkgData:any) {
	const pkgJsonPath = path.join(process.cwd(), 'package.json');
	fs.writeFileSync(pkgJsonPath, JSON.stringify(pkgData, null, 2));
}
