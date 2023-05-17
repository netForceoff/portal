const paths = require('./rules/relative-paths')

module.exports = {
  rules: {
    'relative-paths': {
      create: paths,
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
    }
  }
}
