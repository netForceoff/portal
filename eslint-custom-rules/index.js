const relativePaths = require('./rules/relative-paths')
const publicApi = require('./rules/public-api')
const fsdArchitecture = require('./rules/fsd-architecture')

module.exports = {
  rules: {
    'relative-paths': {
      create: relativePaths,
      meta: {
        docs: {
          description: 'Правило для использования относительных путей в импортах'
        },
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
