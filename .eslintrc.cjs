module.exports = {
  root: true,
  env: { browser: true, es2021: true, jest: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-refresh', '@typescript-eslint', 'react-hooks', 'prettier'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/react-in-jsx-scope': 'off',
    'camelcase': 'off',
    'spaced-comment': 'error',
    'quotes': ['error', 'single'],
    'no-duplicate-imports': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
