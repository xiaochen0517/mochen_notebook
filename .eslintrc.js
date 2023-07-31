module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: 'vue-eslint-parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  rules: {
    // 在这里添加你的自定义规则
    'no-undef': 'off',
    'html-self-closing': 'off',
    'vue/html-self-closing': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  }
}
