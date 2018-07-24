# TypeScript

> TypeScript is a **typed superset** of JavaScript that compiles to plain JavaScript.

It works well with other software quality tools:

* TSLint: extensible **linter** for the TypeScript language
* Jest: delightful JavaScript **testing**
* Prettier: opinionated code **formatter**

Will a volunteer say which of these tools use **static** analysis.

> testing pyramid in 2016

[https://twitter.com/aaronabramov_/status/805913874704674816](https://twitter.com/aaronabramov_/status/805913874704674816)

## Get the class files

In a Terminal window:

1. move to the `ts-weeks-2018` directory into which you cloned the repository
2. `rm -rf b-2/node_modules`
3. `git status`
4. Remove any other unwanted files or subdirectories, for example:
    * `b-2/yarn-error.log`
    * `b-2/npm-debug.log`
    * `.DS_Store`
5. `git add --all`
6. `git commit -m "My changes to files in week b-2"`
7. `git checkout master`
8. `git pull`
9. `git checkout -b b-3-changes` to make a branch for your changes
10. `cd b-3` for this lesson
11. `yarn` to install dependencies, if it is installed on your computer; otherwise see below

If the `yarn` command doesn’t work on your computer:

* type `npm install` instead of `yarn` to install dependencies in step 4
* type `npm test …` instead of `yarn test …` whenever you run a test below
* type `npm run compile …` instead of `yarn compile …` whenever you **compile** a file below
* type `npm run lint …` instead of `yarn lint …` whenever you **check** a file below
* type `npm run prettier …` instead of `yarn prettier …` whenever you **format** a file below

In your code editor, open your copy of `b-3` subdirectory in working directory

## tsc

If TypeScript is installed in your project, then you can run the `tsc` compiler:

1. In Terminal: `ls -al node_modules/.bin` and will a volunteer say what `->` means

2. `node_modules/.bin/tsc --outDir ./lib src/01-basic-types.ts` and see `error TS2552: Cannot find name 'Symbol'.`

3. In your code editor, open:
    * the `src/01-basic-types.ts` file
    * the `lib/01-basic-types.js` file and will a volunteer give a hypothesis for the error

4. In your browser, open [`http://www.typescriptlang.org/docs/handbook/compiler-options.html`](http://www.typescriptlang.org/docs/handbook/compiler-options.html) and scroll down to `--lib` and then `--target` options

5. In Terminal: `node_modules/.bin/tsc --outDir ./lib --target ES2015 src/01-basic-types.ts`

6. In your code editor:

    * Open the `package.json` file and then see `compile` property in `"scripts"` object

    * Open the `tsconfig.json` file and then paste above the `"exclude"` property:

        ```json
        "compilerOptions": {
            "alwaysStrict": true,
            "outDir": "./lib",
            "target": "ES2015"
        },
        ```

7. In Terminal: `yarn compile src/01-basic-types.ts`

Will a volunteer say how the `--target ES2015` option affected the variable declarations in the `.js` file.

**Bonus**: Read [Basic Types](http://www.typescriptlang.org/docs/handbook/basic-types.html)

## input and output types

You can annotate types of input arguments and output result in a function:

```js
// Given number value, return string with limited precision
// at most 3 digits after the decimal point.
const fixValue3 = (value: number): string => { … };
```

1. In Terminal: `yarn compile src/02-input-output-types.ts`

2. In your code editor, open:
    * the `src/02-input-output-types.ts` file
    * the `lib/02-input-output-types.js` file

3. In Terminal: `node lib/02-input-output-types.js`

4. In the `src/02-input-output-types.ts` file, replace `value => {` with `(value: number): string => {`

5. In Terminal: `yarn compile src/02-input-output-types.ts`

6. In Terminal: `yarn lint src/02-input-output-types.ts`

**Bonus**: Read [Functions](http://www.typescriptlang.org/docs/handbook/functions.html)

## function type

You can write a separate function type declaration:

```js
type FixValue = (value: number) => string;
```

1. In your code editor, open the `package.json` file, and then see the `"jest"` property

    * Will a volunteer say what `\\.(js|tsx?)$` regular expression matches
    * Will another volunteer suggest the purpose of various `devDependencies`

2. In Terminal: `yarn test 03-function-type`

3. In your code editor, open the `src/03-function-type.spec.ts` file:

    * Add after `FixValue` type: a `Fixer` function type declaration
    * Add `Fixer` as type annotation to `fixer` declaration
    * Add `FixValue` as type annotation to `fixValue3` and `fixValue4` declarations

4. In Terminal: `yarn test 03-function-type`

5. In Terminal: `yarn lint src/03-function-type.spec.ts`

6. In your code editor, open the `tslint.json` file

7. In your browser, open [`https://palantir.github.io/tslint/rules/`](https://palantir.github.io/tslint/rules/)

**Bonus**: Read [Type Aliases](http://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases)

## interface type

> One of TypeScript’s core principles is that type-checking focuses on the shape that values have. Interfaces are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

1. In Terminal: `yarn test 04-interface-type`

3. In your code editor, open the `src/04-interface-type.spec.ts` file:

    * From the template literal in the `fixPoint` function and the `point` values in the tests, see the properties of a point

    * Paste above the `fixPoint` function:

        ```js
        interface Point {
            x: number
            y: number
        }
        ```

    * Add type annotations to arguments of `fixPoint` function

    * Replace `point` argument with object destructuring

4. In Terminal: `yarn test 04-interface-type`

5. In Terminal: `yarn lint src/04-interface-type.spec.ts`

Will a volunteer say the pros and cons of adding a type annotation for the output of the `fixPoint` function.

If you don’t need to **extend** an interface and it is local to a file, you might write it as a type alias:

```
type Point = {
    x: number
    y: number
}
```

**Bonus**: Read [Interfaces](http://www.typescriptlang.org/docs/handbook/interfaces.html)

## array type

You can write an array type in two ways:

* `type Points = Point[]`
* `type Points = Array<Point>`

1. In Terminal: `yarn test 05-array-type`

3. In your code editor, open the `src/05-array-type.spec.ts` file:

    * Paste below the `Point` interface:

        ```js
        type Points = Point[]
        ```

    * Add type annotation to `points` declaration

4. In Terminal: `yarn test 05-array-type`

5. In Terminal: `yarn lint src/05-array-type.spec.ts`

## CommonJS module exports one value

To import from a CommonJS module:

* Node.js core module: `const fs = require('fs')`
* Installed dependency: `const React = require('react')`
* Application-specific module: `const numerizer = require('./06-commonjs-module')`

To export one value from a CommonJS module:

```js
// Given configuration object which has singular property as string
// and either plural or suffix property as string,
// return function which given value as number, returns noun phrase as string.
module.exports = ({ singular, plural, suffix }) =>
    typeof plural === 'string'
        ? value => `TODO`
        : value => `TODO`
```

1. In your code editor, open the `src/06-commonjs-module.js` file, and then replace `// TODO` comments with implementations of template literals

2. In Terminal: `yarn test 06-commonjs-module`

3. If you write in at least one other language than English, open the `src/06-commonjs-module.spec.js` file, and then add some tests to numerize noun phrases in another language

Will a volunteer say if you needed to add properties to the configuration object for your language.

## CommonJS module exports multiple values

To import multiple values from a CommonJS module:

```js
const {addItem, deleteItem, toggleItem} = require('./07-commonjs-module')
```

To export multiple values from a CommonJS module:

```js
module.exports.addItem = (items, text) => // TODO
module.exports.deleteItem = (items, id) => // TODO
module.exports.toggleItem = (items, id) => // TODO
```

1. In your code editor, open the `src/07-commonjs-module.js` file, and then replace `// TODO` comments with implementations of pure functions

2. In Terminal: `yarn test 07-commonjs-module`

Will volunteers say which array methods or ES2015 features that you used.

## ECMAScript module exports one value

To import from an ECMAScript module:

* Node.js core module: `import fs from 'fs'`
* Installed dependency: `import React from 'react'`
* Application-specific module: `import numerizer from './ecmascript-module'`

To export one value from an ECMAScript module:

```js
// Given configuration object which has singular property as string
// and either plural or suffix property as string,
// return function which given value as number, returns noun phrase as string.
export default ({ singular, plural, suffix }) =>
    typeof plural === 'string'
        ? value => `TODO`
        : value => `TODO`
```

1. In your code editor, open the `src/06-commonjs-module.js` file

2. In your code editor, open the `src/08-ecmascript-module.js` file, and then:

    * Convert from CommonJS to ECMAScript module export
    * Replace `// TODO` comments with your implementations of template literals from previous practice

3. In your code editor, open the `src/08-ecmascript-module.spec.js` file:

    * Change the string in the main `describe` block
    * Convert from CommonJS to ECMAScript module import (remember to change the file name :)

4. In Terminal: `yarn test 08-ecmascript-module`

## ECMAScript module exports multiple values

To import multiple values from an ECMAScript module:

```js
import {addItem, deleteItem, toggleItem} from './09-ecmascript-module'
```

To export multiple values from an ECMAScript module:

```js
export const addItem = (items, text) => // TODO
export const deleteItem = (items, id) => // TODO
export const toggleItem = (items, id) => // TODO
```

1. In your code editor, open the `src/07-commonjs-module.js` file

2. In your code editor, open the `src/09-ecmascript-module.js`, and then:

    * Convert from CommonJS to ECMAScript module
    * Replace `// TODO` comments with your implementations of pure functions from previous practice

3. In your code editor, open the `src/09-ecmascript-module.spec.js` file:

    * Change the string in the main `describe` block
    * Convert from CommonJS to ECMAScript module import (remember to change the file name :)

4. In Terminal: `yarn test 09-ecmascript-module`

**Bonus**: Read [Encapsulating Code with Modules](https://leanpub.com/understandinges6/read#leanpub-auto-encapsulating-code-with-modules) by Nicholas C. Zakas

## ECMAScript module type in script element

1. In your code editor, open:

    * the `lib/10-ecmascript-export.js` file
    * the `lib/10-ecmascript-import.js` file
    * the `lib/10-ecmascript-module.html` file

2. In your Web browser, open the `lib/10-ecmascript-module.html` file, and then open the Console pane to see an error like `Cross-origin script load denied by Cross-Origin Resource Sharing policy`

3. In Terminal: `yarn start ./db/10-db.json`

4. In your Web browser, paste `http://localhost:3000/10-ecmascript-module.html` into the address bar

5. In the `lib/10-ecmascript-import.js` file:

    * Delete `.js` file extension from `import` statement, and then refresh the browser tab
    * Will a volunteer say what Node.js assumes that a Web browser doesn’t
    * Undo your change, and then refresh the browser tab

6. In Terminal, press control-c to stop the server

7. In your code editor:

    * Open the `package.json` file and see the `"start": "json-server --static ./src"` property in the `"scripts"` object
    * Open the `db/10-db.json` file and will a volunteer say what it represents (even if we did not use it :)

**Bonus**: Read [Static file server](https://www.npmjs.com/package/json-server#static-file-server) under `json-server` at `npm`

## TypeScript module exports one value

TypeScript 1.5 introduced support for the ECMAScript module syntax.

1. In your code editor, open the `src/11-typescript-module.ts` file:

    * Add a `Numerize` function type which given value as number returns string
    * Add a `Numerizer` function type which given config as `Config` returns `Numerize` function
    * Add `Numerizer` type annotation to `numerizer` declaration

2. In your code editor, open the `src/11-typescript-module.spec.ts` file and will a volunteer say what is the change to configuration object for sheep

3. In Terminal: `yarn test 11-typescript-module`

4. In your code editor, open the `src/12-typescript-module.ts` file:

    * Add an `Item` interface
    * Add an `Items` array type
    * Add type annotation to the input arguments and output return values of all functions

2. In your code editor, open the `src/12-typescript-module.spec.ts` file

3. In Terminal: `yarn test 12-typescript-module`

## Node.js experimental ESM module loader

If Node.js 8.5.0 or later is installed on your computer, then you can experiment with ECMAScript module files which have `.mjs` extension.

1. In your code editor, open:

    * the `src/13-ecmascript-export.mjs` file
    * the `src/13-ecmascript-import.mjs` file

2. In Terminal: `node --experimental-modules src/13-ecmascript-import`

## TypeScript class

In a TypeScript class:

* Declare class methods and instance properties as `private`, `protected`, or `public` (by default)
* Declare instance properties which only constructor can set as `readonly`

```js
class TextNode {
    public readonly nodeType: number
    public data: string
    public constructor(data: string) {
        this.nodeType = 3
        this.data = data
    }
}
```

1. In your code editor, open the `src/14-class.ts` file:

    * Add `Attribute` interface below `Node` type
    * Add instance property declarations above `constructor` of `Element` class
    * Declare class methods as `public`
    * Add type annotations to input arguments of class methods and virtual constructor functions
    * If you see `prefer-for-of` error from tslint, replace `for` loop with `for-of` loop in `setAttribute` method (search online for an example ;)

2. In your code editor, open the `src/14-class.spec.ts` file:

    * Add an `import` statement for the virtual constructor functions
    * Add declarations of `ELEMENT_NODE` and `TEXT_NODE` values

3. In Terminal: `yarn test 14-class`

**Bonus**: Read [Classes](http://www.typescriptlang.org/docs/handbook/classes.html)

## createElement

1. In your code editor, open the `src/15-create-element.ts` file:

    * Add type annotations to `getAttributeName` function
    * Add type annotations to `getEventName` function and write its implementation
    * Add type annotations to `getChild` function and finish its implementation
    * Finish implementation of `createElement` function to call the helper functions

2. In your code editor, open the `src/15-create-element.spec.ts` file, add an `import` statement for the virtual constructor function

3. In Terminal: `yarn test 15-create-element`

## my application

To practice everything that we have learned about JavaScript language and Document Object Model, invest the remaining time to rewrite a sample application so it displays data that interests you from work or hobby.

1. In Terminal: `yarn compile src/15-create-element.ts`

2. In your code editor, open:

    * the `lib/16-my-app.html` file
    * the `lib/16-my-app.css` file
    * the `lib/16-my-app.js` file

3. In another Terminal: `yarn start ./db/16-db.json`

4. In your Web browser, paste `http://localhost:3000/16-my-app.html` into the address bar

5. Rewrite the application:

    * If you want to write ECMAScript, edit `lib/16-my-app.js` and then refresh the browser tab
    * If you want to write TypeScript, create `src/16-my-app.ts` and then `yarn compile src/16-my-app.ts` to overwrite the `.js` file in the `lib` subdirectory, and then refresh the browser tab

6. In Terminal, press control-c to stop the server when you have finished

**Bonus**: Search [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API) at `developer.mozilla.org`
