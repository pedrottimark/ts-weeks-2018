# ECMAScript

Goal for many improvements in ES2015:

* Communicate your meaning more **declaratively** and less imperatively.
* In other words, you describe **what** to do instead of tell how to do it.

Concise notations help you separate:

* **Generic** patterns, like array methods, which you learn better and better by repetition.
* **Specific** details, like callback functions, which you must understand quickly in each application.

## Get the class files

In a Terminal window:

1. move to the `ts-weeks-2018` directory into which you cloned the repository
2. `rm -rf b-1/node_modules`
3. Depending whether you installed with `yarn` or `npm`, do either of the following:
    * `rm b-1/yarn.lock b-1/yarn-error.log`
    * `rm b-1/package-lock.json b-1/npm-debug.log`
4. `git status`
5. `git add --all`
6. `git commit -m "My changes to files in week b-1"`
7. `git checkout master`
8. `git pull`
9. `git checkout -b b-2-changes` to make a branch for your changes
10. `cd b-2` for this lesson
11. `yarn` to install dependencies, if it is installed on your computer; otherwise see below
12. `cd src`

If the `yarn` command doesn’t work on your computer:

* type `npm install` instead of `yarn` to install dependencies in step 4
* type `npm test …` instead of `yarn test …` whenever you run a test below

In your code editor, open your copy of `a-2` subdirectory in working directory

## arrow functions, part 1

What are functions made of?
* arguments are **input**
* body does **work**
* return value is **output**

To convert a function literal to an arrow function literal:

* Always delete `function` keyword.
* Always insert `=>` between the arguments-**input** and the body-**work** or implicit return-**output**.
* If only one argument, most people delete parentheses. Later, you will see an exception when you can’t.
* If body consists only of a `return` statement, delete braces and `return` keyword.

| arguments | return | function literal | arrow function literal |
| :--- | :--- | :--- | :--- |
| none | none | `function () { … }` | `() => { … }` |
| one | implicit | `function (input) { return output }` | `input => output` |

1. In Terminal: `yarn test 01-point-to-string`
2. In your code editor, open the `src/01-point-to-string.spec.js` file

For our first practice, convert functions to arrow functions.

**In pairs**, for the first `describe` block:

* Someone take role of **navigator** to suggest what to do and why to do it
* Someone else take role of **pilot** to edit the file

**Change roles** for the second `describe` block.

## arrow functions, part 2

If function body consists of multiple statements including `return` statement, keep braces and explicit `return` keyword:

```js
const f = input => {
    // one or more statements
    return output
}
```

1. In Terminal: `yarn test 02-number-to-string`
2. In your code editor, open the `src/02-number-to-string.spec.js` file

For our second practice, convert functions to arrow functions.

**In pairs**, do the first `describe` block, and then **change roles** for the second `describe` block.

Will a volunteer say what the following arrow functions return.

```js
// Here is a simplified API to prepend an item to an array in a module:
let array = []

export const prependItem1 = item => {
    array = [item].concat(array)
}

export const prependItem2 = item =>
    array = [item].concat(array)
```

Will another volunteer say what difference it makes in the API.

## array map

In the `src/03-array-map.spec.js` file:

1. **Each individually** in the first `describe` block:

    * Replace function with arrow function in each `it` block
    * At `/* TODO */` comment, write the implicitly returned value of the callback function

3. **Both collaboratively** in the second `describe` block:

    * Write an `if` statement in the block of the callback function
    * And then replace the block with an implicitly returned ternary expression

## array reduce

In the `src/04-array-reduce.spec.js` file, **take turns** with two `describe` blocks:

1. Write test cases for empty and non-empty arrays
2. At `/* TODO */` comment, write the implicitly returned value of the callback function

**Both together**, copy and paste the first `describe` block, and then adapt from sum (addition) to product (multiplication).

## function closure, part 1

A **closure** is a function that accesses data outside its own scope (that is, outside its arguments plus variables declared in its body).

If a function **returns a function**, when you call the returned function, its body can refer to **arguments** of the outer function.

For example, the body of the inner function refers to `nDigits` of the outer function:

* outer function: `const fixer = (nDigits) => /* implicitly return inner function */`
* inner function: `number => { … }`

```js
// Given number of digits after the decimal point, return function
// that given number, returns string with limited precision.
const fixer = nDigits => number => {
    const toFixed = number.toFixed(nDigits)
    const toString = number.toString() // default conversion
    return toFixed.length < toString.length ? toFixed : toString
}
```

1. In your code editor, open the `src/05-closure-arg.spec.js` file
2. In Terminal: `yarn test 05-closure-arg`

Will a volunteer explain how the `fixer` function eliminates the redundancy in the `src/02-number-to-string.spec.js` file.

## function closure, part 2

If a function **returns functions** in this case as **methods** of an object, when you call a returned function, it can refer to **local variables** of the outer function.

For example, the body of the inner methods refer to `object` of the outer function:

* outer function: `const createSet = () => { … }`
* inner methods: `add(key) { … }`, `delete(key) { … }`, `has(key) { … }`

In an object or class, we recommend **concise methods** like a declaration without `function` keyword:

```js
// A virtual constructor function encapsulates how to create object instances.
// Return an object whose methods access local state via function closure.
const createSet = () => {
    const object = {}

    return {
        add(key) {
            object[key] = true
        },
        delete(key) {
            delete object[key]
        },
        has(key) {
            return Boolean(object[key])
        },
    }
}
```

1. In your code editor, open the `src/06-closure-var.spec.js` file
2. In Terminal: `yarn test 06-closure-var`

The [`Object.create`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) method creates a new object with no prototype methods if `null` is the argument:

```js
const object = Object.create(null)
```

Will a volunteer explain what difference with and without prototype makes in the last test case of the two describe blocks.

**Bonus**: Read [Sets and Maps](https://leanpub.com/understandinges6/read#leanpub-auto-sets-and-maps) by Nicholas C. Zakas

## prototype

[Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) (DOM) connects JavaScript code in script files to HTML markup in Web pages.

* DOM has a tree structure of **nodes**, including elements, text, and comments.
* Each node corresponds to an **object** which has methods and properties.
* A parent element has an **array-like** object of child nodes, also known as siblings.
* The [attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes) of an element are an **array-like** object whose items are objects with `name` and `value` properties.

For an example of object-oriented JavaScript, we will emulate text and element objects.

Will a volunteer say why we must enclose an **object literal** in parentheses, if it’s the implicitly returned value of an arrow function:

```js
const createTextNode = data => ({
    nodeType: TEXT_NODE,
    data: data,
})
```

If name of argument or variable is same as key of property, you can omit redundant names `data: data` in object literals via **initializer shorthand**:

```js
const createTextNode = data => ({
    nodeType: TEXT_NODE,
    data,
})
```

1. In your code editor, open the `src/07-prototype.spec.js` file
2. In Terminal: `yarn test 07-prototype`

In classic JavaScript, a **constructor** is a function that initializes an instance when you call it with the `new` keyword.

* For each property that is **individual** to an instance, assign the value to the key of `this` keyword in the constructor function.
* For each property that is **shared** by all instances, assign the value to the key of `prototype` keyword.

```js
function TextNode (data) {
    this.data = data
}

TextNode.prototype.nodeType = TEXT_NODE

// A virtual constructor function encapsulates how to create object instances.
const createTextNode = data => new TextNode(data)
```

In the `src/07-prototype.spec.js` file, do each of the following, and then rerun the test:

1. **Each individually**, comment out the `createTextNode` function and paste the preceding code as a replacement.

2. **Both collaboratively**, comment out the `createElement` function, and then:

    * rewrite as `Element` constructor
    * move `nodeType` property to `prototype`
    * encapsulate instance creation in `createElement` as virtual constructor

3. **Each individually**, paste and implement the following method:

    ```js
    // Given node, either element or text,
    // append it to childNodes of this instance.
    Element.prototype.appendChild = function (node) {
        // TODO Implement as impure function so childNodes is mutable data.
    }
    ```

4. Prepend `//` to disable comments above and below the following test block in the file:

    ```js
    /*
    it('appends element and text nodes', () => {
        …
    })
    */
    ```

5. **Both collaboratively**, paste and implement the following method:

    ```js
    // Given name and value,
    // update or append attribute to attributes of this instance.
    Element.prototype.setAttribute = function (name, value) {
        const attributes = this.attributes
        for (let i = 0; i < attributes.length; i += 1) {
            // If attribute with name property already exists,
            // then assign its value property, and then return.
        }
        attributes.push({name, value}) // append new attribute object
    }
    ```

6. Prepend `//` to disable comments above and below the following test block in the file:

    ```js
    /*
    it('sets attributes', () => {
        …
    ))
    */
    ```

Will a volunteer say what value the `setAttribute` method returns and why:
* if it returns from `for` loop
* if the `for` loop iterates through all attributes

**Bonus**: Search [Mozilla Developer Network](https://developer.mozilla.org) to see if it is possible to stop iteration from the callback function of array `forEach` method.

## class

A `class` definition encapsulates the constructor and its prototype methods.

1. In your code editor, open the `src/08-class.spec.js` file
2. In Terminal: `yarn test 08-class`

Given the following constructor function:

```js
function TextNode (data) {
    this.data = data
}
```

Here is the corresponding class definition with `constructor` keyword:

```js
class TextNode {
    constructor(data) {
        this.data = data
    }
}
```

The `new` keyword instantiates an instance of a class, therefore the virtual constructor is unchanged:

```js
const createTextNode = data => new TextNode(data)
```

Given the following prototype method:

```js
// Given name, return value of attribute of this instance
// otherwise undefined.
Element.prototype.getAttribute = function (name) {
    const found = this.attributes.find(attribute => attribute.name === name)
    return found && found.value
}
```

Here is the corresponding **concise method** like declaration without `function` keyword:

```js
class Element {
    // Given name, return value of attribute of this instance
    // otherwise undefined.
    getAttribute(name) {
        const found = this.attributes.find(attribute => attribute.name === name)
        return found && found.value
    }
}
```

Will a volunteer explain the idiom with `&&` conditional and operator.

* Like a function declaration, a concise method does **not** end with semicolon.
* Unlike a concise method in an object, a concise method in a class does **not** end with comma.

In the `src/08-class.spec.js` file, **both collaboratively**:

1. Convert the `Element` constructor to  the corresponding class definition with `constructor` keyword.
2. Convert the `Element.prototype` methods to concise class methods.
3. Leave the `nodeType` as `Element.prototype` property value. It is rare to leave anything outside.

**Bonus**: Read pages 165–190 [Introducing JavaScript Classes](https://leanpub.com/understandinges6/read#leanpub-auto-introducing-javascript-classes) by Nicholas C. Zakas

## array reduce

A **props** object in React corresponds to an array of attribute objects in HTML:

* The **key** of the prop is the value of the **name** property in the attribute object.
* The **value** of the prop is the value of the **value** property in the attribute object.

```js
const attributesInHTML = [
    {
        name: 'title',
        value: 'description of element',
    }
]
const propsInReact = {
    title: 'description of element',
}
```

1. In Terminal: `yarn test 09-attributes-to-props`
2. In the `src/09-attributes-to-props.spec.js` file, **both collaboratively**:
    * Delete `//` to enable comments above and below the first `toProps` function which has `for` loop implementation
    * Prepend `//` to disable comments above and below the second `toProps` function which has `reduce` method, and at `// TODO` comment, complete the callback function

For information about a few differences between HTML attributes like `class` and React props like `className` see [Differences in Attributes](https://reactjs.org/docs/dom-elements.html#differences-in-attributes)

## Object.keys and array methods

An array has `length` property for number of items, but an object doesn’t for number of properties.

The [`Object.keys`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) method returns as an array the keys of the object argument.

Will a volunteer say how to get the number of properties of an object.

1. In Terminal: `yarn test 10-props-to-attributes`
2. In your code editor, open the `src/10-props-to-attributes.spec.js` file, and then:
3. **Each individually**, convert `toAttributes` to an arrow function
4. **Each individually**, convert `map` method callback to an arrow function
5. **Both collaboratively**, chain a call to array [`sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method **preceding** the `map` method in the `toAttributes` function and delete `.not` in assertion of last test, so that the array does consist of attributes in **ascending order by name**.

Will a volunteer say what are the pros and cons of sorting or not sorting properties by keys.

Will another volunteer say why even though `sort` is an impure method (because it mutates the array) that the `toAttributes` function is pure.

## jsdom in Jest

Jest provides simulated DOM globals like `document` and `window` in the test environment by default.

To **render** markup from data, also known as the state of the application:

* Call `createElement` method of global `document` object.
* Call `appendChild` and `setAttribute` methods of elements.
* Assign text (safely) to `innerHTML` property of elements.

One way to **test** elements is to serialize markup with [`toMatchSnapshot`](https://facebook.github.io/jest/docs/en/expect.html#tomatchsnapshotoptionalstring) matcher:

* The snapshot file name is the corresponding test file name with `.snap` extension.
* It is in a `__snapshots__` subdirectory of the directory which contains the test file.
* The first time Jest tests an assertion, it **stores** the initial received serialization as a snapshot.
* After that, Jest **compares** the current received serialization to the snapshot.

The goal of a snapshot test is to control **changes**:

* Prevent unexpected **regression**. If change is incorrect, then fix code.
* Confirm expected **progress**. If change is correct, then update snapshot.

Practice reviewing the report when a test fails because there is a change:

1. In Terminal: `yarn test 11-jsdom`
2. In your code editor, open the `src/11-jsdom.spec.js` file
3. In your code editor, open the `src/__snapshots__/11-jsdom.spec.js.snap` file and compare the serialization for each test case     to the `renderItem` function and the item argument
4. Comment out the `li.innerHTML = item.text` line and delete `//` preceding the following line
5. In Terminal: `yarn test 11-jsdom` and see report that a test fails, because there is a change
6. In Terminal: `yarn test 11-jsdom -u` to update the snapshot, because the change is progress, and then look for the change in the `.snap` file
7. **Both collaboratively**, Prepend `//` to disable comments above and below the second `describe` block and implement `renderList` function
8. In Terminal: `yarn test 11-jsdom` and then look for the added snapshot in the `.snap` file
9. **Both collaboratively**, convert the output markup from list to table:
    * Replace `ul` with `table` which contains `tbody`
    * Replace `li` with `tr` which contains `td`
10. In Terminal: `yarn test 11-jsdom` and see report that tests fail, because there is are changes
11. In Terminal: `yarn test 11-jsdom -u` to update the snapshot, because the change is progress, and then look for the changes in the `.snap` file

## DOM in browser

Display in a Web browser with real DOM the code that was tested with simulated DOM.

Because modules are a topic for next week, we will copy and paste code instead of importing the same code.

1. In your code editor, open the `src/12-dom.html` file, and see the following elements:
    * `<div id="root"></div>`
    * `<script src="12-dom.js"></script>`
2. In a Web browser, open the `src/12-dom.html` file, and then open the Inspector pane to see rendered markup
3. In your code editor, open the `src/12-dom.js` file
4. Copy the **table** implementations of `renderItem` and `renderList` functions from `src/11-jsdom.spec.js` file and paste to replace implementations in the `src/12-dom.js` file
5. Refresh the browser tab which displays the `src/12-dom.html` file
6. In the Inspector pane, verify the expected change to rendered markup

Will a volunteer explain the [`querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector) method on the second-to-last line of the `src/12-dom.js` file, including what assumption it makes about the `src/12-dom.html` file.

## template literals

A **template literal** is a string enclosed in backtick quote marks. As a declarative alternative to imperative string concatenation, `${…}` known as **string interpolation** can contain any JavaScript expression. The value is coerced to string and inserted.

```js
const greet = name => `hello ${name}`
```

1. In Terminal: `yarn test 13-template-literals`
2. In your code editor, open the `src/13-template-literals.spec.js` file, and then:
3. **Both collaboratively**, add a `describe` block with tests for nouns like `goose/geese` or `mouse/mice` which have a separate singular and plural form, and then write an alternative version of `pluralize` function.
4. **Each individually**, add a `describe` block with a function and tests of your choice for an application-specific template string. For example:
    * Date format
    * Currency format
    * Feedback on form for invalid input

**Bonus**: Read pages 25–32 [Template literals](https://leanpub.com/understandinges6/read#leanpub-auto-template-literals) by Nicholas C. Zakas

## array destructuring

With a similar **literal** notation, put together and take apart an array.

```js
// Put together at right of = with array literal notation
const point = [0.25, 0.875]

// Take apart at left of = with array destructuring
const [x, y] = point
```

Will a volunteer explain the following idiom:

```js
let x = 0.25
let y = 0.875

[y, x] = [x, y]
```

1. In Terminal: `yarn test 14-array-destructuring`
2. In your code editor, open the `src/14-array-destructuring.spec.js` file
3. **Each individually**, comment out `return` statement following `// TODO` comment, and then:
    * Declare variables `x` and `y` with array destructuring
    * Rewrite array index references `array[0]` and `array[1]` with `x` and `y`
4. **Both collaboratively**:
    * Replace `array` argument of callback function with array destructuring from the declaration
    * If there is a syntax error, what do you need to do?
    * Delete the variable declaration from body of callback function
    * Replace body and explicit `return` statement with implicit return without a body

**Bonus**: Read pages 90–92 [Array destructuring](https://leanpub.com/understandinges6/read#leanpub-auto-array-destructuring) by Nicholas C. Zakas

## object destructuring

With a similar **literal** notation, put together and take apart an object.

```js
// Put together at right of = with object literal notation
const point = {x: 0.25, y: 0.875}

// Take apart at left of = with object destructuring
const {x, y} = point
```

Unlike array destructuring in which you choose names freely, the variable names must match the property keys.

1. In Terminal: `yarn test 15-object-destructuring`
2. In your code editor, open the `src/15-object-destructuring.spec.js` file
3. **Both collaboratively**, comment out `renderItem` function definition following `// TODO` comment, and then:
    * Rewrite `item` argument with object destructuring for `completed` and `text` properties
    * If there is a syntax error, what do you need to do?
    * Rewrite dot notation on `item` argument with property names as arguments

Will a volunteer say if key doesn’t exist in an object, what value does variable with that name get from destructuring.

Will another volunteer say why you cannot replace `renderItem` function body with implicit return.

**Bonus**: Read pages 84–89 [Object destructuring](https://leanpub.com/understandinges6/read#leanpub-auto-object-destructuring) by Nicholas C. Zakas

## array spread

In an array literal, the ... [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) means “spread out” the values of an iterable, especially an array.

Here is an analogy of spreading out cards of each suit into a hand:

```js
const hearts = ['A♥', '7♥', '6♥']
const diamonds = []
const clubs = ['10♣', '9♣', '5♣', '2♣']
const spades = ['J♠', '9♠', '8♠', '7♠', '5♠', '2♠']

const cards = [...hearts, ...diamonds, ...clubs, ...spades]
```

The array literal implies a new array instance, therefore immutable data.

| General pattern | Specific example |
| --- | --- |
| **Copy** an array | `[...array]` |
| **Append** an item to the end | `[...array, item]` |
| **Prepend** an item at the start | `[item, ...array]` |

We still recommend array methods with callback functions, like `filter`, `map`, `reduce`, and `find`

1. In Terminal: `yarn test 16-array-spread`
2. In your code editor, open the `src/16-array-spread.spec.js` file
3. **Each individually**, comment out `addItem` declaration following `// TODO` comment, and then rewrite with array spread operator instead of array `concat` method

Will a volunteer say what `...` means for an argument in a function **call**:

```js
const element = React.createElement(type, props, ...children)
```

## rest parameter

A **rest parameter** is an argument preceded by `...` in a function **definition**. It becomes an array of zero or more items which are the rest of the arguments:

```js
const React = {
    createElement(type, props, ...children) {
        // scope of method body includes:
        // type, props, and the rest of its arguments as an array of zero or more children
    }
}
```

## object spread

In an object literal, ES2018 includes `...` [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) for properties. It works in Node.js 8.6.0, Firefox 55, Chrome 60, Safari 11.1, but not Edge 17.

The object literal implies a new object instance, therefore immutable data.

The last value for a repeated key is the winner.

| ES2015 | ES2018 |
| --- | --- |
| `Object.assign({}, object, {key: value})` | `{...object, key: value}` |

1. In Terminal: `yarn test 17-object-spread`
2. In your code editor, open the `src/17-object-spread.spec.js` file
3. **Take turns**: Comment out `toggleCompleted` declaration following `// TODO` comment, and then rewrite with object spread operator instead of `Object.assign` method
4. **Change roles**: Comment out `replaceText` declaration following `// TODO` comment, and then rewrite with object spread operator instead of `Object.assign` method

Will a volunteer say another ES2015 object notation you see in the `replaceText` function.

**Bonus**: Read [Spread defines properties](http://2ality.com/2016/10/rest-spread-properties.html#spread-defines-properties-objectassign-sets-them) by Dr. Axel Rauschmayer

## function bind

The [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) method adds a function to be called when the specified event occurs at the target element in the DOM.

The [`'click'`](https://developer.mozilla.org/en-US/docs/Web/Events/click) event occurs when the pointing device button is pressed and released.

The function [`bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) method creates a new function which, when called:
* has `this` context set to the first argument (which is `null` if not relevant)
* has any additional bound arguments preceding arguments from the function call

When you render an array of objects as a list of items, the callback function needs the `id` of the data item which corresponds to the item element that is clicked.

1. In your code editor, open the `src/18-function-bind.html` file, and see the following elements:
    * `<style>…</style>`
    * `<div id="root"></div>`
    * `<script src="18-function-bind.js"></script>`
2. In a Web browser, open the `src/18-function-bind.html` file, and then open the Console pane
3. In your code editor, open the `src/18-function-bind.js` file
4. Click items and verify the expected output in the Console pane
5. **Both collaboratively** in the `src/18-function-bind.js` file:
    * Comment out `li.addEventListener('click', () => { onClick(id) })`
    * Rewrite the line with function `bind` method in the second argument: `onClick.bind(null, id)`
    * Save your change
6. Refresh the browser tab which displays the `src/18-function-bind.html` file
7. Click items and verify the expected output in the Console pane

Will a volunteer explain how the original callback worked with arrow function.

Will another volunteer explain how the rewritten callback works with bound function.

Will yet another volunteer say how you decide whether you need to bind a callback function.

**Bonus**: View [When and how to bind callback methods](https://speakerdeck.com/pedrottimark/bind-callback-methods-at-triadjs) by pedrottimark

## React elements as markup

In React, an **element** is a plain object that describes a component instance or DOM node and its properties:

* An element is not an instance.
* You can’t call any methods on the element.
* It’s an immutable object that tells React what you want to see on the screen.

You don’t need to learn a templating language because:

* JSX is a syntax extension to JavaScript which looks similar to HTML and SVG.
* For data values, conditional logic, or `map` methods with component-specific callback functions, enclose any JavaScript expression in `{}` which are analogous to `${}` in template literals.

> By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

Babel compiles JSX elements as `React.createElement(type, props, ...children)` function calls.

1. In Terminal: `yarn test 19-react-elements-as-markup`
2. In your code editor, open the `src/19-react-elements-as-markup.spec.js` file
3. In your code editor, open the `src/__snapshots__/19-react-elements-as-markup.spec.js.snap` file

**Bonus**: [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html) and [JSX in Depth](https://reactjs.org/docs/jsx-in-depth.html)

## React elements as objects

A [symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) can represent a **unique identifier**. Symbols are the only primitive types in JavaScript which don’t have a literal form.

* To create a symbol in a module, call the `Symbol()` function.
* To create a symbol that is **shared** in more than one module, call the `Symbol.for('react.element')` method with a string identifier as argument like `'react.element'`

Because JSON doesn’t support symbols, React elements have a `$$typeof: Symbol.for('react.element')` property to safely distinguish them from plain objects in untrusted JSON data.

1. In Terminal: `yarn test 20-react-elements-as-objects`
2. In your code editor, open the `src/20-react-elements-as-objects.spec.js` file
3. In your code editor, open the `src/__snapshots__/20-react-elements-as-objects.spec.js.snap` file

**Bonus**: Read [React Components, Elements, and Instances](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html) by Dan Abramov

## Learn more, part 1

See local variables for method closures in returned Redux store object on lines 56–60, 98–99 in [Slim Redux in 99 lines](https://gist.github.com/gaearon/ffd88b0e4f00b22c3159)

```js
export function createStore(reducer, initialState) {
  var currentReducer = reducer
  var currentState = initialState
  var listeners = []
  var isDispatching = false
  …
  return { dispatch, subscribe, getState, replaceReducer }
}
```

## Learn more, part 2

Render a feature of your choice from work or hobby:

1. Write realistic state of Web page using data types object, array, string, number, boolean.
2. Adapt `11-jsdom.js` with render functions for the data.
3. Adapt `12-dom.html` and `12-dom.js` with copies of the render functions for the data.
4. Adapt `18-function-bind.html` and `18-function-bind.js` with copies of the render functions and at least on event handler callback function.

## Learn more, part 3

Get a preview of [TypeScript](http://www.typescriptlang.org/docs/home.html) especially classes:

1. [Basic Types](http://www.typescriptlang.org/docs/handbook/basic-types.html)
2. [Interfaces](http://www.typescriptlang.org/docs/handbook/interfaces.html)
3. [Classes](http://www.typescriptlang.org/docs/handbook/classes.html)

## Resources for compatibility

* [ECMAScript compatibility table](https://kangax.github.io/compat-table/es6/)
* [Node.js ES2015, ES2016, and ES2017 support](http://node.green)
* [Can I use? Support tables for HTML5, CSS3, etc.](https://caniuse.com)

## Resources for language

1. Reminder when you forget something you knew: [Learn ES2015](https://babeljs.io/learn-es2015/) at babeljs.io
2. Details and related information: [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) at developer.mozilla.org
3. Deeper conceptual understanding: [Understanding ECMAScript 6](https://leanpub.com/understandinges6/read) by Nicholas C. Zakas
4. News you can use: [2ality – JavaScript and more](http://2ality.com/) blog by Dr. Axel Rauschmayer
