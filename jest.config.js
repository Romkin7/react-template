module.exports = {
    preset: 'ts-jest',
    verbose: true,
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleNameMapper: {
        '\\.(css|less|scss|sss|styl|svg)$': '<rootDir>/src',
    },
};
