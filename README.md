## My favorites ESLint configurations.

## Setup
1. Install dependencies
```
  npm install eslint @lsferreirapel/eslint-config --save-dev
```
2. Create a .eslintrc.json file extending the config
```json
{
  // If you want use on react apps (default)
  "extends": "@lsferreirapel/eslint-config",
  // OR "extends": "@lsferreirapel/eslint-config/environments/react",

  // If you want use on node apps
  "extends": "@lsferreirapel/eslint-config/environments/node",
}
```