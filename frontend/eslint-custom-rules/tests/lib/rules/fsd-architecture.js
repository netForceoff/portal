const path = require('path');

const RuleTester = require('eslint').RuleTester;

const rule = require('../../../rules/fsd-architecture');

const ruleTester = new RuleTester({
	parserOptions: {ecmaVersion: 6, sourceType: 'module'},
});

ruleTester.run('import-checker', rule, {
	valid: [
		{
			filename: path.resolve(__dirname, '') + '/entities/Rating',
			code: "import { Rating } from '../../ui/Rating'",
			errors: [],
		},
	],
	invalid: [
		{
			filename: path.resolve(__dirname, '') + '/entities/Rating',
			code: "import { Rating } from 'widgets/Article'",
			errors: [{message: 'Слой должен быть на уровень ниже'}],
		},
		{
			filename: path.resolve(__dirname, '') + '/entities/Rating',
			code: "import { Rating } from 'widgets/Article'",
			errors: [{message: 'Слой должен быть на уровень ниже'}],
		},
		{
			filename: path.resolve(__dirname, '') + '/entities/Rating',
			code: "import { Rating } from '@/widgets/Article'",
			errors: [{message: 'Слой должен быть на уровень ниже'}],
			options: [
				{
					alias: '@',
				},
			],
		},
	],
});
