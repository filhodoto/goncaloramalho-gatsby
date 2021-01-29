module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': `<rootDir>/src/tests/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/tests/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.cache`,
    `<rootDir>.*/public`,
    `<rootDir>.*/static`,
    `<rootDir>.*/.history`,
  ],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  moduleNameMapper: {
    '^src(.*)$': `<rootDir>/src$1`,
    '^components(.*)$': `<rootDir>/src/components$1`,
    '^helpers(.*)$': `<rootDir>/src/helpers$1`,
    '^pages(.*)$': `<rootDir>/src/pages$1`,
    '^theme(.*)$': `<rootDir>/src/theme$1`,
    '^api(.*)$': `<rootDir>/src/api$1`,
    '^state(.*)$': `<rootDir>/src/state$1`,
    '^assets(.*)$': `<rootDir>/src/assets$1`,
    '^images(.*)$': `<rootDir>/src/images$1`,
    '^tests(.*)$': `<rootDir>/src/tests$1`,
  },
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup-test-env.js'],
};
