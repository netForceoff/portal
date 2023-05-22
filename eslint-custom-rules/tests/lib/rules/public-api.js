const path = require('path')

const RuleTester = require('eslint').RuleTester

const rule = require('../../../rules/public-api')

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 6, sourceType: 'module' }
})

ruleTester.run('public-api-checker', { create: rule, meta: { fixable: 'code' } }, {
  valid: [
    {
      filename: path.resolve(__dirname, '') + '/widgets/Article',
      code: "import { Rating } from 'entities/Rating'",
      errors: []
    },
    {
      filename: path.resolve(__dirname, '') + '/widgets/Article',
      code: "import { Rating } from 'shared/ui/Icon'",
      errors: []
    },
    {
      filename: path.resolve(__dirname, '') + '/widgets/Article',
      code: "import { Rating } from 'pages/Article'",
      errors: []
    },
    {
      filename: path.resolve(__dirname, '') + '/widgets/Article',
      code: "import { Rating } from 'features/Article'",
      errors: []
    },
    {
      filename: path.resolve(__dirname, '') + '/widgets/Article',
      code: "import { Rating } from 'widgets/Article'",
      errors: []
    },
    {
      filename: path.resolve(__dirname, '') + '/widgets/Article',
      code: "import { Rating } from '@/shared/ui/Icon'",
      errors: [],
      options: [{
        alias: '@'
      }]
    },
    {
      filename: path.resolve(__dirname, '') + '/widgets/Article',
      code: "import { Rating } from 'widgets/Article/ui/Icon'",
      errors: []
    },
    {
      filename: path.resolve(__dirname, '') + '/widgets/Article',
      code: "import React from 'react'",
      errors: []
    }
  ],
  invalid: [
    {
      filename: path.resolve(__dirname, '') + '/widgets/Article',
      code: "import { Rating } from 'entities/Rating/ui/Rating'",
      errors: [{ message: 'Импорт должен быть из PUBLIC API (index.ts)' }],
      output: "import { Rating } from 'entities/Rating'"
    },
    {
      filename: path.resolve(__dirname, '') + '/widgets/Article',
      code: "import { Rating } from 'features/Rating/ui/Rating'",
      errors: [{ message: 'Импорт должен быть из PUBLIC API (index.ts)' }],
      output: "import { Rating } from 'features/Rating'"
    },
    {
      filename: path.resolve(__dirname, '') + '/widgets/Article',
      code: "import { Rating } from 'pages/Rating/ui/Rating'",
      errors: [{ message: 'Импорт должен быть из PUBLIC API (index.ts)' }],
      output: "import { Rating } from 'pages/Rating'"
    },
    {
      filename: path.resolve(__dirname, '') + '/widgets/Article',
      code: "import { Rating } from '@/entities/Rating/ui/Rating'",
      errors: [{ message: 'Импорт должен быть из PUBLIC API (index.ts)' }],
      output: "import { Rating } from '@/entities/Rating'",
      options: [{
        alias: '@'
      }]
    }
  ]
})
