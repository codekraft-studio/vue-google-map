module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: 'eslint:recommended',
  rules: {
    "no-console": 1,
    "no-unused-vars": 1
  }
}
