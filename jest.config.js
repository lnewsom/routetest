module.exports = {
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/src/jestGlobalMocks.ts/",
        "/src/setup-jest.ts"
    ],
    preset: "jest-preset-angular",
    roots:['src'],
    setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
    testPathIgnorePatterns: ["<rootDir>/src/environments/"]
}
