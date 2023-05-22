const path = require('path')

const RuleTester = require('eslint').RuleTester

const rule = require('../../../rules/relative-paths')

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 6, sourceType: 'module' }
})

ruleTester.run('path-checker', rule, {
  valid: [
    {
      filename: path.resolve(__dirname, '') + '/entities/Rating',
      code: "import { Rating } from '../../ui/Rating'",
      errors: []
    }
  ],
  invalid: [
    {
      filename: path.resolve(__dirname, '') + '/entities/Rating',
      code: "import { Rating } from 'entities/Rating/ui/Rating'",
      errors: [{ message: 'Путь должен быть относительным' }]
    },
    {
      filename: path.resolve(__dirname, '') + '/entities/Rating',
      code: "import { Rating } from '@/entities/Rating/ui/Rating'",
      errors: [{ message: 'Путь должен быть относительным' }],
      options: [{
        alias: '@'
      }]
    }
  ]
})
