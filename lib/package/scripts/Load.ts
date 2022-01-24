import {
	loadModule
} from '@corcc/loader';
export function loadScripts ({
	path
}: {
	path: string | undefined
}) {
	return loadModule({
		path: path ?? 'Scripts'
	});
}
