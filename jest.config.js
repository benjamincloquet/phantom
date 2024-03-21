module.exports = {
  preset: "ts-jest",
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  testEnvironment: "node",
  moduleNameMapper: {
    "\\.(scss|sass|css)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.ts?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.jest.json",
      },
    ],
  },
};
