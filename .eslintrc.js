module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'react-native/react-native': true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: ['react', 'react-native'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    // turn off prop-types since many RN apps use TypeScript or other patterns
    'react/prop-types': 'off',
    // React 17+ auto JSX runtime means React doesn't need to be in scope
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
