module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
    'import/order': [
      'error',
      { groups: [['builtin', 'external', 'internal']], 'newlines-between': 'always' },
    ],
    '@typescript-eslint/no-empty-interface': 'off',
    'react/prop-types': 'off',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'styled-components',
            message: 'Please import from styled-components/macro.',
          },
        ],
        patterns: ['!styled-components/macro'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true }],
  },
  env: {
    jest: true,
  },
}
