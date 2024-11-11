module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [2, 'always', ['fix', 'feat', 'chore', 'docs', 'style', 'refactor', 'test']],
	},
};
