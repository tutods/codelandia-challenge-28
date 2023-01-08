const fs = require('fs');

const folders = fs
  .readdirSync('src', { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => !['styles'].includes(dirent.name) && dirent.name);

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier',
    'next',
    'airbnb-typescript-prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'simple-import-sort',
    'import',
    'unused-imports',
    'prettier'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx']
      }
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        reservedFirst: ['key'],
        multiline: 'last'
      }
    ],
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'always'
      }
    ],
    'react/button-has-type': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'no-plusplus': 'off',
    'no-useless-escape': 'off',
    'no-restricted-exports': 'off',
    'consistent-return': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variableLike',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow'
      }
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react', '^next', '^recoil', '^@?\\w'],
          ['^styles'],
          [`^(${folders.join('|')})(/.*|$)`, '^\\.'],
          ['^[^.]']
        ]
      }
    ],
    'prettier/prettier': ['error', { usePrettierrc: true }]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/']
      }
    }
  }
};