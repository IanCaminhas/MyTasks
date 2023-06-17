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
  ],
  //coverage reports
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.tsx", //o que considerar para montar o relatório ? qualquer subpasta(/** */)... em qualquer arquivo(/*.tsx) com extensão .tsx
    "!src/**/*.spec.tsx"//Não vai pegar/considerar arquivos de testes.
  ],
  coverageReporters: ["lcov"] //tipo de relatório a ser criado

}
