export default {
  clearMocks: true,
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  moduleDirectories: [
    'node_modules',
    'src'
  ],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],

  modulePaths: [
    '<rootDir>src'
  ],
  moduleNameMapper: {
    '\\.(s?css)$': 'identity-obj-proxy'
  },
  rootDir: '../../',
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>src/**/__tests__/**/*.[jt]s?(x)'
  ]
}
