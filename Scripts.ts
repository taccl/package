module.exports = {
	build: {
		tsc: 'tsc',
		dist: 'tsc'
	},
	lint: {
		run: 'eslint',
		fix: 'eslint --fix --ext .ts,.tsx .'
	}
};
