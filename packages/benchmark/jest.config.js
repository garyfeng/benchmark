module.exports = {
  collectCoverage: false,
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react/cleanup-after-each'
  ],
  testPathIgnorePatterns: [`node_modules`, `temp`],
  globals: {
    __PATH_PREFIX__: ``
  },
  testURL: `http://localhost`
};
