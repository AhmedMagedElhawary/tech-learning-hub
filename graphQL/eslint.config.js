import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default [
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 2022,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      // ESLint core rules
      "no-unused-vars": "warn",

      // Enforce semicolons
      semi: ["error", "always"], // This will require semicolons

      // TypeScript specific rules
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];
