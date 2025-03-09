// eslint.config.js
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { fileURLToPath } from 'url';
import path from 'path';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaVersion: 2022,
        sourceType: 'module',
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // Basic linting
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      
      // Strict type safety rules
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unsafe-argument': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      
      // Custom rules for dangerous patterns
      'no-restricted-syntax': [
        'error',
        {
          // Catch double type assertions
          selector: 'TSAsExpression > TSAsExpression',
          message: 'Double type assertion is unsafe and bypasses TypeScript\'s type checking'
        },
        {
          // Catch any single type assertions with 'any'
          selector: 'TSAsExpression[typeAnnotation.typeName.name="any"]',
          message: 'Type assertion to "any" is unsafe and bypasses TypeScript\'s type checking'
        }
      ],
    },
  },
];