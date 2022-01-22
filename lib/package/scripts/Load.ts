import {
	loadModule
} from '@corcc/loader';
export function loadScripts () {
	return loadModule({
		path: 'Scripts'
	});
}
