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
  reporters: [
    'default',
    ['jest-html-reporters', {
      publicPath: '<rootDir>/reports/unit',
      filename: 'report.html',
      inlineSource: true,
      pageTitle: 'Test Report'
    }]
  ],
  modulePaths: [
    '<rootDir>src'
  ],
  moduleNameMapper: {
    '\\.(s?css)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/jest/fileMock.ts'
  },
  rootDir: '../../',
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>src/**/__tests__/**/*.[jt]s?(x)'
  ],
  globals: {
    __IS_DEV__: true
  }
}
