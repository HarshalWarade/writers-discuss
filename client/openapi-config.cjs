// openapi-config.cjs
/** @type {import('@rtk-query/codegen-openapi').ConfigFile} */
const config = {
  schemaFile: "https://writers-discuss.onrender.com/api-docs/json",
  apiFile: "./src/store/baseApi.ts", // <-- UPDATE THIS
  apiImport: "baseApi", // <-- UPDATE THIS
  outputFile: "./src/store/generatedApi.ts",
  exportName: "writersApi",
  hooks: true,
};

module.exports = config;
