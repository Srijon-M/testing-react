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
  };
  