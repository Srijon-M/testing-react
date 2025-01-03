module.exports = {
    // Specify the test environment
    testEnvironment: "jest-environment-jsdom",
  
    // Transform files using Babel
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
  
    // Ignore node_modules except for specific packages
    transformIgnorePatterns: ["/node_modules/"],
  
    // Module file extensions to consider
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  
    // Mock static files like CSS or images
    moduleNameMapper: {
      "\\.(css|scss|sass)$": "identity-obj-proxy",
    },
  
    // Additional setup
    setupFilesAfterEnv: ['./src/jest.setup.ts'],

    //Code Coverage
    collectCoverage: true,
    collectCoverageFrom: [
      "src/**/*.ts",          // Include all TypeScript files in src/
      "src/**/*.tsx",         // Include all TypeScript React files
      "!src/**/index.ts",     // Exclude index files
      "!src/**/*.test.tsx",   // Exclude test files
      "!src/**/mockData.ts",  // Exclude specific files like mock data
      "!src/app/**/layout.tsx",
      "!src/app/**/page.tsx"
    ],
    coverageThreshold: {
      global: {
        branches: 80,   // At least 80% branch coverage globally
        functions: 85,  // At least 85% function coverage globally
        lines: 90,      // At least 90% line coverage globally
        statements: 90, // At least 90% statement coverage globally
      }
    }
  };
  