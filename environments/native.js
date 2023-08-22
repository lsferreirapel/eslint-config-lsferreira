module.exports = {
  env: {
    'browser': true,
    'es2021': true,
    'react-native/react-native': true
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'react',
    'react-native',
    '@typescript-eslint',
    'simple-import-sort',
    'unused-imports',
    'import'
  ],
  rules: {
    'prettier/prettier': ["error", {
      'printWidth': 80,
      'tabWidth': 2,
      'singleQuote': true,
      'trailingComma': 'all',
      'arrowParens': 'always',
      'semi': false,
      'endOfLine': 'auto',
    }],
    'react/react-in-jsx-scope': 'off',
    'import/no-duplicates': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        'groups': [
          ['^\\u0000'],
          ['^react$'],
          ['^react-native$'],
          ['^@?\\w'],
          ['^'],
          ['^\\.']
        ]
      }
    ],
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    "unused-imports/no-unused-vars": [
			"error",
			{ "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
		]
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  }
}