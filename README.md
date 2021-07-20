npx create-next-app husky-next
touch tsconfig.json
npm install --save-dev typescript @types/react @types/node
npm run dev
npm install eslint --save-dev
npx eslint --init

✔ How would you like to use ESLint? · style (enforce)
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · google
✔ What format do you want your config file to be in? · JavaScript
Checking peerDependencies of eslint-config-google@latest
✔ Would you like to install them now with npm? · Yes

add settings lines to .eslintrc.js

npm install --save-dev prettier  
npm install --save-dev eslint-config-prettier

add 'prettier' to 'extends' of .eslintrc.js

install vscode extensions ES7 and Prettier
in settings:

- "editor.defaultFormatter": "esbenp.prettier-vscode",
- "editor.formatOnPaste": true
- "editor.formatOnSave": true,

Errors in index.ts file after finishing with settings:

- Missing JSDoc comment -> .eslint(require-jsdoc)
- 'React' must be in scope when using JSX -> eslint(react/react-in-jsx-scope)
  Fix: added

```
import React from "react";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
export default function Home(): JSX.Element {
```

prettier --write .
zsh: command not found: prettier
Fix: npm install -g prettier

To execute eslint and prettier everytime you save:
add .vscode folder in root
add settings.json file in .vscode
In this file, you can add settings specific to a particular project.  
At the end of settings.josn, we say that eslint format first and then prettier format.

Install husky to set up a pre git commit hook that is going to do 4 things:

- no prettier warnings in the code
- no eslint warnings in the code
- no errors compiling typesript
- that we can run a valid build using Next build

npx husky-init
npm install

In package.json, in scripts:
"check-types": "tsc --pretty --noEmit", //check typescript with prettier  
"check-format": "prettier --check .", //tells prettier to check all files, except the ones added to a .prettierignore file  
"check-lint": "eslint . --ext ts ext tsx --ext js", //tells eslint to check all .ts, .tsx and .tsx files
"format":.. //automatically rewrite all of our files with proper formatting
"test-all":.. // runs some of the above commands in sequence

add pre-commit file in .husky file that will run all scripts before it is commited and log warnings and errors

Note:

- add lint-staged to check staged files
- added .eslintignore and .prettierignore with a few extentions to ignore
- see video: https://www.youtube.com/watch?v=sH93pQb9bWM
