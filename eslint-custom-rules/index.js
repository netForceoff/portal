const fsdArchitecture = require('./rules/fsd-architecture')
const publicApi = require('./rules/public-api')
const relativePaths = require('./rules/relative-paths')

module.exports = {
  rules: {
    'relative-paths': {
      create: relativePaths,
      meta: {
        docs: {
          description: 'Правило для использования относительных путей в импортах'
        },
        fixable: 'code',
        schema: [
          {
            type: 'object',
            properties: {
              alias: {
                type: 'string'
              }
            }
          }
        ]
      }
    },
    'public-api': {
      create: publicApi,
      meta: {
        docs: {
          description: 'Правило для использования PUBLIC API в файлах по FSD системе'
        },
        fixable: 'code',
        schema: [
          {
            type: 'object',
            properties: {
              alias: {
                type: 'string'
              }
            }
          }
        ]
      }
    },
    'fsd-architecture': {
      create: fsdArchitecture,
      meta: {
        docs: {
          description: 'Правило для соблюдения корректного импорта по методологии FSD'
        },
        schema: [
          {
            type: 'object',
            properties: {
              alias: {
                type: 'string'
              },
              ignorePatterns: {
                type: 'array'
              }
            }
          }
        ]
      }
    }
  }
}
