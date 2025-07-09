module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^styles/(.*)$': '<rootDir>/src/styles/$1',
    '^theme/(.*)$': '<rootDir>/src/theme/$1',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
