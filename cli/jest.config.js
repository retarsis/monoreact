module.exports = {
  transform: { '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest' },
  testMatch: ['<rootDir>/**/*(*.)@(test).[tj]s?(x)'],
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/templates/',
    '<rootDir>/test/.stage/*',
    '<rootDir>/test/.*/fixtures/'
  ],
  moduleFileExtensions: ['ts', 'js', 'json', 'jsx', 'tsx', 'node'],
  globalSetup: './test/setup.ts',
  globalTeardown: './test/teardown.ts'
};
