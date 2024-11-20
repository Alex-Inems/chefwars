module.exports = {
    testEnvironment: 'jest-environment-jsdom',  // Ensure jsdom is set as test environment
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',   // Use Babel to transform files
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Optional Jest setup
    moduleNameMapper: {
        '\\.(css|scss|sass)$': 'identity-obj-proxy',   // Mock CSS files
        '^@/(.*)$': '<rootDir>/$1',  // Add alias configuration here
    },
};
