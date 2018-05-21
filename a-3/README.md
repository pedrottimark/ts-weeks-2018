# TypeScript

> TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

## Get the class files

In a Terminal window:

1. move to the `ts-weeks-2018` directory into which you cloned the repository
2. `git pull`
3. remember the location of your working directory in which you edit a copy of practice files
4. `cp -R a-3 path-to-your-working-directory`
5. `cd path-to-your-working-directory/a-3`
6. `yarn`

If the `yarn` command doesn’t work on your computer:

* type `npm install` instead of `yarn` to install dependencies in step 4
* type `npm test …` instead of `yarn test …` whenever you run a test below

In your code editor, open your copy of `a-3` subdirectory in working directory

## tsc

If TypeScript is installed in your project, then you can run the `tsc` compiler:

1. In Terminal:
    * `ls -al node_modules/.bin`
    * `node_modules/.bin/tsc --outDir ./out src/01-basic-types.ts` and see `error TS2552: Cannot find name 'Symbol'.`

2. In your code editor, open:
    * the `src/01-basic-types.ts` file
    * the `out/01-basic-types.js` file

3. In your browser, open [`http://www.typescriptlang.org/docs/handbook/compiler-options.html`](http://www.typescriptlang.org/docs/handbook/compiler-options.html) and scroll down to `--lib` and then `--target` options

4. In Terminal: `node_modules/.bin/tsc --outDir ./out --target ES2015 src/01-basic-types.ts`

5. In your code editor:

    * Open the `package.json` file and then paste `"tsc": "tsc --outDir ./out --target ES2015",` preceding the `"test"` property within the object value of the `"scripts"` property

    * Open the `tsconfig.json` file and then paste preceding the `"exclude"` property:

        ```json
        "compilerOptions": {
            "outDir": "./out",
            "target": "ES2015"
        },
        ```

6. In Terminal: `yarn run tsc src/01-basic-types.ts`

Will a volunteer say how the `--target ES2015` option affected the variable declarations in the `.js` file.

Will another volunteer say why `yarn run tsc` instead of `yarn tsc`

## input and output types

You can annotate types of input arguments and output result in a function:

```js
// Given number value, return string with limited precision
// at most 3 digits after the decimal point.
const valueToString3 = function (value: number): string { … };
```

1. In Terminal: `yarn run tsc src/02-input-output-types.ts`

2. In your code editor, open:
    * the `src/02-input-output-types.ts` file
    * the `out/02-input-output-types.js` file

3. In Terminal: `node out/02-input-output-types.js`

4. In the `src/02-input-output-types.ts` file, replace `function (value) {` with `function (value: number): string {`

5. In Terminal: `yarn run tsc src/02-input-output-types.ts`

6. In the `src/02-input-output-types.ts` file, convert `valueToString3` to an arrow function

7. In Terminal: `yarn run tsc src/02-input-output-types.ts`


// 4. In the `package.json` file, paste the `--noImplicitAny` option preceding the close quote of the `"tsc --outDir ./out --target ES2015"` property value

## function type

You can write a separate function type declaration:

```js
type FixValue = (value: number) => string;
```

1. In Terminal: `yarn run tsc src/03-function-type.ts`

2. In your code editor, open:
    * the `src/03-function-type.ts` file
    * the `out/03-function-type.js` file

3. In Terminal: `node out/03-function-type.js`

4. In the `src/03-function-type.ts` file:

    * Add as second line of the file: a `Fixer` function type declaration
    * Add `Fixer` as type annotation to `fixer` declaration

5. In Terminal: `yarn run tsc src/03-function-type.ts`
