# JavaScript

## Get the class files

In a Terminal window:

1. move to a **parent** directory for:
    * the repository that you will clone in step 2
    * the working directory that you will make in step 3
2. `git clone https://github.com/pedrottimark/ts-weeks-2018.git`
3. make a working directory outside of the cloned directory
4. `cp -R ts-weeks/week-1 path-to-your-working-directory`
5. change directory to your copy of `week-1` subdirectory in working directory
6. `yarn`
7. `cd week-1`

If the `yarn` command doesn’t work on your computer:

* type `npm install` instead of `yarn` to install dependencies in step 4
* type `npm test …` instead of `yarn test …` whenever you run a test below

In your code editor, open your copy of `week-1` subdirectory in working directory

## JavaScript and ECMAScript

* **Java**Script is the **actual** language in specific versions of Node.js or browsers.
* **ECMA**Script is the **ideal** language that is published as a standard.

ECMAScript 2015 is also known as ES2015 or ES6. To make it clear, write the year :)

| year | math trick | version |
| :--- | :--- | :--- |
| 2009 | | 5 |
| 2015 | 2015 - 2009 | 6 |
| 2016 | 2016 - 2009 | 7 |

## typeof

The `typeof` prefix operator returns the type of an expression as a string:

* `'number'` type includes integer and float values
* `'string'` type is enclosed in single or double quotes
* `'boolean'` type has explicit values `false` and `true`
* `'undefined'` type is for uninitialized variables or omitted arguments
* `'symbol'` type is in ES2015 (wait until next week :)
* `'function'` type is a specialized object which can be called
* `'object'` type includes array, date, error, and regular expression

For example:

1. In your code editor, open the `src/01a-typeof.js` file
2. In Terminal: `node 01a-typeof.js`

If you write library code (especially for tests) that runs in multiple environments, you can use `typeof` operator to test whether a global variable exists.

1. In your code editor, open the `src/01b-reference-error.js` file
2. In Terminal: `node 01b-reference-error.js`
3. In your code editor, open the `src/01c-typeof-idiom.js` file
4. In Terminal: `node 01c-typeof-idiom.js`

## const and let

Instead of `var` declaration, we will learn `const` and `let` declarations in ES2015.

A `const` declaration is for variables whose values:

* **cannot** change: `const NOT_FOUND = 404;`
* **don’t** change: `const number = parseInt(string, 10);`

A `let` declaration is for variables whose values **will** change:

* initialized: `let i = 0;`
* uninitialized: `let i;`

Will a volunteer say what is the initial value of an **uninitialized variable**.

## addition

When you add two values, their types determine the type of the result.

* `1 + 2`
* `'1' + '2'`
* `'1' + 2`
* `1 + '2'`

Will four volunteers each say the **value** and **type** of a preceding expression.

1. In your code editor, open the `src/02-addition.js` file
2. In Terminal: `node 02-addition`

Will a volunteer say another name for **addition of strings**?

## function declaration

The following function declaration removes redundancy of expressions in the `src/02-addition.js` file.

```js
function output(value, logger) {
    logger(typeof value, value);
}
```

In a function declaration:

* Most people **do not** separate `function` keyword and opening parenthesis with a space.
* Semicolon **does not** follow closing brace of function block.

Will a volunteer say a **generic term** for `value` and `logger`.

1. In your code editor, open the `src/03a-function-declaration.js` file
2. In Terminal: `node 03a-function-declaration`

## function expression

Because a function is value, you can assign it to a variable.

```js
const output = function (value, logger = console.info) {
    logger(typeof value, value);
};
```

In a function expression:

* Many people **do** separate `function` keyword and opening parenthesis with a space.
* Semicolon **does** follow closing brace of function block.

Will a volunteer say the **meaning** of `logger = console.info` as an argument.

1. In your code editor, open the `src/03b-function-expression.js` file
2. In Terminal: `node 03b-function-expression`

## strict comparison

The result of strict equality `===` or strict inequality `!==` operator is a boolean value.

* `'12' === 12`
* `'12' !== 12`
* `parseInt('12', 10) === 12 /* second argument means decimal base 10 */`
* `parseInt('12', 10) !== 12`

Will two volunteers each say the **results of a pair** of preceding comparisons.

1. In your code editor, open the `src/04-strict-comparison.js` file
2. In Terminal: `node 04-strict-comparison`

Will a volunteer say what caused the **empty line** between the pairs of output lines.

## object literal

* An **object literal** is enclosed in braces and contains properties.
* A **property** consists of a **key** followed by a **value**.
* To get or set the value of a property, use **dot notation** if you know the key.

```js
const item = {
    completed: false,
    id: 1,
    text: '',
};

console.info(typeof item);
console.info(typeof item.completed);
console.info(typeof item.id);
console.info(typeof item.text);
console.info(typeof console.info); // and say a generic name for this type of property
```

Will five volunteers each say the **type** of one of the preceding expressions.

1. In your code editor, open the `src/05-object-literal.js` file
2. In Terminal: `node src/05-object-literal`

## test specifications with Jest

For the rest of this lesson, let’s document what we learn as test specifications.

* The patterns for test file names include `*.spec.js`
* The primary unit of a test file is `describe('scenario', function () { /* tests */ });`
* The secondary unit is `test('case', function () { /* assertion */ });`
* An **assertion** compares a **received** expression to an **expected** value with a **matcher**.

```js
describe('object literal', function () {
    const item = {
        completed: false,
        id: 1,
        text: 'Just do it!',
    };

    test('object', function () {
        expect(typeof item).toBe('object');
    });
    // and so on
)};
```

Will a volunteer say the **received** expression, **expected** value, and **matcher** in preceding assertion.

1. In your code editor, open the `src/05-object-literal.spec.js` file
2. In Terminal: `yarn test 05-object-literal`

If the `yarn` command doesn’t work on your computer, type `npm test …` instead of `yarn test …`

Will a volunteer say in which file to find the `test` script?

## array literal

* An **array literal** is enclosed in brackets and contains items.
* An **item** has an **index** which is an integer.
* To get or set the value of a item, use **bracket notation**.
* An array is a specialized object which has a `length` property.

Will four volunteers each say one of the following:

1. the value of `length` property of empty array: `[]`
2. the **value** of item at index `2` in array `[1, 2, 3]`
3. the **value** of item at index `3` in array `[1, 2, 3]`
4. the **value** of item at index `0` in array `[1, 2, 3]`

Because `typeof` operator doesn’t distinguish object from array, ES2015 provides an `Array.isArray` method:

1. In your code editor, open the `src/06-array.js` file
2. In Terminal: `yarn test 06-array`

## test specification for array

In your code editor, create a new `src/06-array.spec.js` file, and then paste the following:

```js
describe('array', function () {
});
```

For our first **practice**, y’all write 6 test cases which correspond to numbered items in the preceding section and the pair of examples in the `src/06-array.js` file.

In pairs, edit your copy of the test specification:

* Someone take role of **navigator** to suggest what to do and why to do it.
* Someone else take role of **pilot** to edit the file, and then in Terminal: `yarn test 06-array`

Change roles for each test **case** so each is navigator 3 times and pilot 3 times.

## function literal

JavaScript has **function literal** notation: `function (/* args */) {/* body */}`

* function expression: `const name = function (/* args */) {/* body */};`
* anonymous callback function: `test('case', function (/* args */) {/* body */});`

The arguments are optional. The body contains zero or more `return` statements.

Will a volunteer say the value of a call to a function whose body contains no `return` statement.

## impure function

A so-called **impure** function does one or more of the following:

* give the same arguments, return a different value in different calls
* mutate (that is change) its arguments
* have side effects (for example, by making API calls)

```js
const item = {
    completed: false,
    id: 1,
    text: 'To do, or not to do?',
};

const toggleCompleted = function (item) {
    item.completed = !item.completed;
};

toggleCompleted(item);
toggleCompleted(item);
```

Will a volunteer come up to trace the function calls and tell the value of the `completed` property after each call?

1. In your code editor, open the `src/07a-impure-function.js` file
2. In Terminal: `node 07a-impure-function`

## pure function

Given the **same arguments**, a **pure** returns the **same value** and also:

* does not mutate its **arguments**
* does not have **side effects**, therefore it does not make API calls

```js
const itemA = {completed: false, id: 1, text: 'Just do it!'};
const itemB = {completed: true, id: 2, text: 'I did it.'};
const itemC = {id: 3, text: 'To do, or not to do?'};

const isCompleted = function (item) { return item.completed; }
const isUncompleted = function (item) { return !item.completed; }
```

Will a volunteer say the values of 3 calls to `isCompleted` with each item as its argument.
Will a volunteer say what the `!` prefix operator means, and the values of calls to `isUncompleted`

For assertions about **value** types, you have seen [`toBe`](https://facebook.github.io/jest/docs/en/expect.html#tobevalue) matcher in Jest
For assertions about **reference** types, you will use [`toEqual`](https://facebook.github.io/jest/docs/en/expect.html#toequalvalue) matcher in Jest

Will a volunteer explain the difference between **value** and **reference** types.
Will a volunteer explain the difference between **shallow** and **deep** equality comparison.

For our next **practice**, create a `src/07b-pure-function.spec.js` file:

* in pairs, write a `describe` block with 3 tests for `isCompleted` function
* change roles, and the write another `describe` block with 3 tests for `isUncompleted` function

## Object.assign

To write a pure version of `toggleCompleted` function, you need to copy properties of an object.

The [`Object.assign`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) method merges properties of its arguments from left to right.

In the **pure** idiom to make a copy with or without changes, the first argument is `{}` an empty object:

```js
const item = {
    completed: false,
    id: 1,
    text: 'To do, or not to do?',
};

const copiedWithChanges = Object.assign({}, item, {
    completed: !item.completed
});
const copiedWithoutChanges = Object.assign({}, item);
```

Will a volunteer say what the following function call does?

```js
Object.assign(item, {
    completed: !item.completed
});
```

1. In your code editor, open the `src/08-object-assign.js` file
2. In Terminal: `node 08-object-assign`

For our next **practice**, create a `src/08-object-assign.spec.js` file, and then write tests for `isCompleted` function:

* in pairs, write a pure `toggleCompleted` function and test for original value `false`
* change roles to write test for original value `true`
* brainstorm how to test that the function is pure, and then add assertions

Will one or more pairs volunteer to describe how you tested that the function is pure.

## for

Here is an example of `for` loop with `let` declaration and `+=` addition assignment operator:

```js
const items = [
    {completed: false, id: 1, text: 'Just do it!'},
    {completed: true, id: 2, text: 'I done it.'},
]
const copied = [];

for (let i = 0; i !== items.length; i += 1) {
    copied[i] = items[i];
}
```

For our next **practice**, edit the `src/09-copy-array.spec.js` file, and this time each person alone write the assertions to test that:

* the function returns the correct value
* the function returns a different array

Will two volunteers each please describe how you tested one of the preceding bullet points.

Will a volunteer describe **shallow** versus **deep** copy and say which this is.

## array push

You can use [`push`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method of array to write an impure function to add item.

1. In your code editor, open the `src/10a-array-push.spec.js` file
2. In Terminal: `yarn test 10a-array-push`

## array concat

You can use [`concat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) method of array to write a pure function to add item.

1. In your code editor, open the `src/10b-array-concat.spec.js` file
2. In Terminal: `yarn test 10b-array-concat`

## array slice

The [`slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) method returns a new array which contains items from:

* a **start** index (default is 0)
* up to but **not including** an **end** index (default is length of array)

For our next **practice**, edit the `src/11-array-slice.spec.js` file, and this time y’all decide among yourselves whether to work individually or collaboratively to implement a pure `deleteItem` function using two calls of the `slice` method.

Will a volunteer describe your implementation.

## idioms to copy an array

Here are two idioms to copy an array in JavaScript:

* `const copied = array.concat();`
* `const copied = array.slice();`

Next week, you will learn another idiom to copy an array in ES2015 :)

## string length slice index

Like an array, a string has

* `length` property
* `slice` method
* you can **get** the character at an index via bracket notation

Because a string is immutable, you cannot **set** a character via bracket notation:

1. In your code editor, open the `src/12a-not-strict.js` file
2. In Terminal: `node 12a-not-strict`

A `'use strict';` directive a start of a file causes it to run in **strict mode**, which throws a `TypeError` instead of failing silently:

1. In your code editor, open the `src/12b-use-strict.js` file
2. In Terminal: `node 12b-use-strict`

## try catch

If the code in a `try` block throws an error, the code in the `catch` block handles it:

1. In your code editor, open the `src/12c-try-catch.js` file
2. In Terminal: `node 12c-try-catch`

## truthy and falsey values

In conditional expressions, including the condition of `if` statement, JavaScript coerces any value to either **truthy** or **falsey**.

1. In your code editor, open the `src/13-truthy-falsey.spec.js` file
2. In Terminal: `yarn test 13-truthy-falsey`

## ternary operator

The so-called ternary operator has 3 operands:

* condition
* result if condition is truthy
* result if condition is falsey

You will often see a ternary expression in `render` method of React components:

```js
// Convert object item property to className property for a DOM element.
const className = item.completed ? 'completed' : 'uncompleted;'
```

1. Comment out the `truthy` function in the `src/13-truthy-falsey.spec.js` file, and then replace it with the following:

    ```js
    const truthy = function (value) {
        return value ? true : false;
    };
    ```

2. Run the tests again.

3. Comment out the preceding `truty` function in the `src/13-truthy-falsey.spec.js` file, and then replace it with the following:

    ```js
    const truthy = function (value) {
        return !!value;
    };
    ```

4. Run the tests again.

Will a volunteer way what the `!!` idiom means.

## array filter

The [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method:

* returns a new array whose length is **less than or equal** to the length of the original array
* has as its argument a callback function which returns a **truthy** value to keep the item or a **falsey** value to omit the item

For each item in the original array, the `filter` method calls the callback function 3 arguments:

* the item
* its index
* the original array

For our next **practice**, edit the `src/14-array-filter.spec.js` file, and this time y’all decide among yourselves whether to work individually or collaboratively to implement a pure `deleteItem` function using the `filter` method. Hint: You don’t need to use the `item` argument :)

## array map

The [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method:

* returns a new array whose length is **equal** to the length of the original array
* has as its argument a callback function which returns the **mapped** value for the item

For our next **practice**, edit the `src/15-array-map.spec.js` file

* take turns with the first 4 tests, so each is navigator 2 times and pilot 2 times
* collaborate on the last 2 tests

Will a pair volunteer to describe your callback function for the last test.

You will often see a `map` method like second to last test in `render` method of React components.

## regular expression

A [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) literal is enclosed in forward slashes. Read the documentation for more details.

The `escapeHTML` function replaces `<` and `>` that delimits element **tags** with character entities so they become literal punctuation characters which don’t create elements.

Like jQuery, React will take care of this for you.

1. In your code editor, open the `src/16-regexp.spec.js` file
2. In Terminal: `yarn test 16-regexp`
3. Collaboratively in pairs, write two more tests in which the untrusted input contains an `&` ampersand character in the text and in an attribute. Decide whether you need to improve the `escapeHTML` function.

Will a pair volunteer to share what you did in step 3.

Be careful with regular expressions!

## join and split

The array [`join`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method returns a string.

The default joiner is comma. Two more useful joiners are `''` empty string or `'\n'` newline.

The string [`split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) method (usually) returns an array.

1. In your code editor, open the `src/17-join-split.js` file
2. In Terminal: `node 17-join-split`

Be careful with `split` method, whether untrusted input or what you have joined.

## array indexOf

The array [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) method returns the index at which an item first occurs; otherwise `-1`.

1. In your code editor, open the `src/18-array-indexOf.js` file
2. In Terminal: `node 18-array-indexOf`
3. In pairs, read about string [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) method
4. In pairs, write 4 tests for string `indexOf` method, so each is navigator 2 times and pilot 2 times. Do not write your own `indexOf` function. Assert the expected string values for particular scenarios.

## array find and findIndex

* The array [`find`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method returns the **value** of the first element in the array for which the callback function returns a truthy value; otherwise `undefined`.

* The array [`findIndex`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) method returns the **index** of the first element in the array for which the callback function returns a truthy value; otherwise `-1`.

Individually edit the `src/19-array-find.spec.js` file to implement the callback functions to find item by its `id` property.

## array reduce

The array [`reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) method returns a value that accumulates or aggregates the items.

Its arguments are the callback function and initial value of accumulator.

For each item in the original array, the `reduce` method calls the callback function 4 arguments:

* previous value of accumulator
* the item
* its index
* the original array

In pairs, edit the `src/20-array-reduce.spec.js` file:

* Individually implement callback and write assertions to accumulate sum.
* Collaboratively implement callback and write one assertion to get next id.

The [attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes) of an element in HTML or SVG are an array-like object whose items are objects with `name` and `value` properties.

The **props** of an element in React consist of an object whose properties correspond to keys:

* The name of the attribute is the **key** of the prop.
* The value of the attribute is the **value** of the prop.

Will a volunteer way why `class="completed"` attribute has `className` key in JavaScript.

* A class attribute in HTML or SVG: `[{className: 'completed'}]`
* A class prop in React: `{className: 'completed'}`

Will a volunteer trace the original implementation for the last test case.

In pairs, edit the `src/21-attributes-to-props.spec.js` file and collaboratively implement the callback in the alternative (commented out) implementation.

Will a volunteer trace the alternative implementation for the last test case.

## Object.keys

An array has `length` property for number of items, but an object does not?

The [`Object.keys`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) method returns as an array the keys of the object argument.

Will a volunteer say how to get the number of properties of an object.

Open the `src/22-props-to-attributes.spec.js` file:

* Will a volunteer trace the `toAttributes` function for the test with 2 properties.
* Collaboratively use array [`sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method in the `toAttributes` function and change the last test.

Will a volunteer say what are the pros and cons of sorting or not sorting properties by keys.

## sort

The default comparison of sort method might work for numbers and some strings.

You can provide a comparison callback function to sort structured items.

Collaboratively edit the `src/23-array-sort.js` file.

## forEach

The [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method is function form of `for` loop.

Collaboratively edit the `src/24-array-forEach.js` file.

## Object.create

The [`Object.create`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) method creates a new object with no prototype methods if `null` is the argument.

1. In your code editor, open the `src/25-object-create.spec.js` file
2. In Terminal: `yarn test 25-object-create`

Can a volunteer describe what is the problem in the first `describe` block and why.

## function closure

## arrow functions

## while

1. In your code editor, open the `src/28-while-conditional-and.js` file
2. In Terminal: `yarn test 28-while-conditional-and`

## switch

Here is a preview of Document Object Model:

1. In your code editor, open the `src/29-switch-node.js` file
2. In Terminal: `yarn test 29-switch-node`

Here is a preview of Redux actions and reducer:

1. In your code editor, open the `src/30-switch-action.js` file
2. In Terminal: `yarn test 30-switch-action`

## Suggestions for application time

1. Make a minimal HTML file to test `src/01b-reference-error.js` and `src/01c-typeof-idiom.js` in browser environment.

2. Go through [Read and write arrow functions](https://speakerdeck.com/pedrottimark/arrow-functions-columbia-front-end) presentation

3. Read more on Mozilla Developer Network about:

    * [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and the write realistic test cases for at least one array method of your choice
    * [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
    * [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
    * [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

4. Search on `http://www.unicode.org/` or via Google :) for hex codes:

    * typographical apostrophe
    * Euro symbol
    * smiley

5. Search on `developer.mozilla.org` or `w3.org` for Unicode hex character code escape for:

    * JavaScript
    * HTML
    * CSS
