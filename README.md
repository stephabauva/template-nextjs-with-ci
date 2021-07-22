<p align="center">
  <img height="250" src="https://github.com/stephanBV/template-react-typescript-autoLint-with-ESLint-Prettier/blob/main/thumbnail/husky-ts-react-eslint-prettier.png"/>
</p>

This template does 4 things:

- checking types with next lint,
- checking formatting with prettier Prettier,
- using Husky pre-coomit hook to put check types and formatting together with custom logs
- Continuouly integrating with GitHub Actions to do a second types and styling check.  
  (It also cache dependencies to make your workflows faster and more efficient).

This template is for a React-Next.js-Typescript, but you can modify it as you like.  
I use Visual Studio code and installed the ESLint and Prettier extentions.  
Your code will auto-format whenever you hit save and pre-commit hooks to check your code for style consistency using Husky.

It uses the Google's Typescript style guidelines.

Simply git clone and `npm install` at the root,  
Install the ESLint and ES7 vscode extensions,  
write some code,

```
git add .
git commit -m <message>
```

The terminal will let you know if you need to fix anything in your code, otherwise it accepts the commit.

This repo builds on the work of the original author -> original video here: https://www.youtube.com/watch?v=sH93pQb9bWM <br />
See the notes.txt for more details of the set up.
