module.exports = {
    preset: 'ts-jest',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    cacheDirectory: '.jest/cache',
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    clearMocks: true,
    fakeTimers: { enableGlobally: true },
  };
  