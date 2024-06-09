module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'mocks', 'typings'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/explicit-function-return-type': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'react*/**',
            group: 'external',
            patternOptions: { partial: true, nocomment: true },
            position: 'before',
          },
          {
            pattern: './**/*.+(css|scss)',
            group: 'index',
            position: 'after',
            patternOptions: { nocomment: true },
          },
        ],
        distinctGroup: true,
        pathGroupsExcludedImportTypes: [],
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
          orderImportKind: 'asc',
        },
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
      },
    ],
    'import/newline-after-import': 'error',
    'import/no-default-export': 'error',
    // 'import/no-unused-modules': 'error',
  },
}
