module.expors = {
  "preset": "react-native",
  "setupFilesAfterEnv": [
    "@testing-library/jest-native/extend-expect"
  ],
  //Paths que sejam ignorados. São pastas nas quais o jest não precisa monitorar a ocorrência de testes.
  testPathIgnorePatterns: [
    "/node_modules",
    "/android",
    "/ios"
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ]
}
