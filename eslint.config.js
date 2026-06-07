import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import prettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['src/**/*.{ts,tsx}'], // enable type-aware linting only for src files
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      reactHooks.configs.flat.recommended,
      prettier
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json']
      },
      // ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      'no-unneeded-ternary': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      // 'import/no-unresolved': 'error',
      "prettier/prettier": "error", // shows formatting errors as ESLint errors
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': `error`
    }
  },
])
