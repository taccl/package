import {
	loadModule,
	loadJSON
} from '@corcc/loader';

export function loadPackageJson () {
	return loadJSON({
		path: 'package'
	});
}

export function loadPackage () {
	return loadModule({
		path: 'Package'
	});
}
