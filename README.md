# Boilerplate React App

Here's how I like to spin up a TypeScript React app with the following tech:

- Vite: build
- Vitest: testing framework
- ESLint: linter
- Prettier: code formatter

## Create a New React Project with Vite

Execute the following command to create a new React project with Vite:

```sh
npm create vite@latest
```

1. On the `Project name` step, enter the project name of your choice (e.g, `vite-project`)
2. On the `Select a framework` step, choose `React`
3. On the `Select a variant` step, choose `TypeScript + SWC`
4. Finally, run the commands they prompt to install dependencies, and start the dev server to check that everything works.
   ```sh
     cd vite-project
     npm install
     npm run dev
   ```

## Update the File Structure

Update the file structure to match the [bulletproof-react recommendation](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md).

## Install Prettier

Install Prettier to format your code:

```sh
npm i -D prettier
```

Create `.prettierrc` with the following content:

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "endOfLine": "lf"
}
```

## Configure ESLint and Prettier

Install the ESLint Prettier plugin to prevent conflicts in rules between ESLint and Prettier:

```sh
npm i -D eslint-config-prettier
```

Add the following script to `package.json`:

```json
"format": "prettier --write ./src"
```

Install React-specific linting rules for ESLint:

```sh
npm i -D eslint-plugin-react
```

Update `eslint.config.js` to match the following:

```js
export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:@typescript-eslint/recommended-type-checked',
      'plugin:@typescript-eslint/stylistic-type-checked',
      'plugin:react-hooks/recommended',
      // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
      // Make sure it's always the last config, so it gets the chance to override other configs.
      'prettier',
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
    parser: '@typescript-eslint/parser',
    ignorePatterns: ['dist'],
  }
);
```

## Configure VS Code

Install the Prettier and ESLint plugins for VS Code.

Create `.vscode/settings.json` with the following content:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnPaste": true,
  "editor.formatOnType": false,
  "editor.formatOnSave": true,
  "editor.formatOnSaveMode": "file",
  "files.autoSave": "onFocusChange"
}
```

### Set Up Unit Testing

Install the necessary dependencies for unit testing:

```sh
npm i -D vitest jsdom @testing-library/jest-dom @testing-library/react
```

Create `src/tests/setupTests.ts` and insert the following code:

```ts
import '@testing-library/jest-dom';
```

Create a `vitest.config.ts` that merges the existing Vite config, so it isn't overridden.

> Note: This isn't recommended by Vitest, but I was getting a TS error when I tried to add the test config to `vite.config.ts`, and this was simpler.

```ts
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/tests/setupTests.ts'],
    },
  })
);
```

Add the following scripts in `package.json`:

```json
"test": "vitest",
"coverage": "vitest run --coverage"
```
