const path = require('path');

const RuleTester = require('eslint').RuleTester;

const rule = require('../../../rules/relative-paths');

const ruleTester = new RuleTester({
	parserOptions: {ecmaVersion: 6, sourceType: 'module'},
});

ruleTester.run(
	'path-checker',
	{create: rule, meta: {fixable: 'code'}},
	{
		valid: [
			{
				filename: path.resolve(__dirname, '') + '/entities/Rating',
				code: "import { Rating } from '../../ui/Rating'",
				errors: [],
			},
		],
		invalid: [
			{
				filename:
					path.resolve(__dirname, '') +
					'/entities/Rating/ui/Rating.tsx',
				code: "import { slice } from 'entities/Rating/model/slice'",
				errors: [{message: 'Путь должен быть относительным'}],
				output: "import { slice } from '../model/slice'",
			},
			{
				filename:
					path.resolve(__dirname, '') +
					'/entities/Rating/ui/Rating.tsx',
				code: "import { slice } from '@/entities/Rating/model/slice'",
				errors: [{message: 'Путь должен быть относительным'}],
				output: "import { slice } from '../model/slice'",
				options: [
					{
						alias: '@',
					},
				],
			},
		],
	}
);
