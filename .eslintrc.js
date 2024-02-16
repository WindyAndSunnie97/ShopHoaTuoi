module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:@typescript-eslint/recommended',
    'some-other-config-you-use',
    'prettier',
  ],
  rules: {
    // Note: you must disable the base rule as it can report incorrect errors
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    // Previously, you need to disable the built-in rule
    semi: 'off',
    '@typescript-eslint/semi': 'error',
  },
};
