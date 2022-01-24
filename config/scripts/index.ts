import { loadModule } from '@corcc/loader';
import path from 'path';
const { writeScripts } = loadModule({
	path: './lib'
});
const scripts = writeScripts(path.join(__dirname.replace(process.cwd(), ''), 'Config'));
console.log('scripts:');
console.log(scripts);
