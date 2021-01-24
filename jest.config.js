module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/__mocks__/fileMock.ts',
    '\\.svg$': '<rootDir>/config/jest/__mocks__/svgrMock.ts',
    '\\.module.css$': 'identity-obj-proxy',
    '\\.css$': '<rootDir>/config/jest/__mocks__/styleMock.ts',
  },
  clearMocks: true,
  coverageDirectory: 'coverage',
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/jest-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.node.json',
    },
  },
};
