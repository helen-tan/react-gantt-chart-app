import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['src/**/*.{ts,tsx}'], // enable type-aware linting only for src files
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      "plugin:prettier/recommended",
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.app.json']
      },
      // ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: ["prettier"],
    rules: {
      'no-unneeded-ternary': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      // 'import/no-unresolved': 'error',
      "prettier/prettier": "error" // shows formatting errors as ESLint errors
    }
  },
])
