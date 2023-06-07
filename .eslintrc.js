module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  globals: {
    __IS_DEV__: true
  },
  overrides: [{
    files: ['src/**/__tests__/**/*.[jt]s?(x)'],
    rules: {
      'i18next/no-literal-string': 'off'
    }
  }],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './cypress/tsconfig.json']
  },
  plugins: ['react', 'i18next', 'react-hooks', 'eslint-custom-rules', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'eslint-custom-rules/relative-paths': ['error', {
      alias: '@'
    }],
    'eslint-custom-rules/public-api': ['error', {
      alias: '@'
    }],
    'eslint-custom-rules/fsd-architecture': ['error', {
      alias: '@'
    }],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/prefer-optional-chain': 'off',
    'react-hooks/rules-of-hooks': 'error',
    '@typescript-eslint/consistent-type-exports': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/method-signature-style': 'off',
    'import/order': ['error', {
      pathGroups: [{
        pattern: '@/**',
        group: 'internal',
        position: 'after'
      },
      {
        pattern: './**.module.*',
        group: 'internal',
        position: 'after'
      }
      ],
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
        caseInsensitive: false
      }
    }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
