const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard', 'prettier'],
  ignorePatterns: ['dist', '.eslintrc.js'],
  settings: {},
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [],
  rules: {},
}
