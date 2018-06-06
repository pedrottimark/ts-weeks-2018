# React, part 1

To add a new feature to a single-page application, you might change any of the following:

* markup
* style
* data for state
* code for logic
* code for interaction

Our main goal for today is gain confidence to improve a React application.

Let’s adapt the example of self check-out application for fruits and vegetables:
* subset of an application for customer to **purchase** products online
* subset of an application for employee to **fulfill** orders in the store

## Get the class files

In a Terminal window:

1. Move to the `ts-weeks-2018` directory into which you cloned the repository

2. `git pull`

3. In Terminal: `npm install --global create-react-app`

4. Go to [https://reactjs.org/community/debugging-tools.html](https://reactjs.org/community/debugging-tools.html) and then follow the link to install React Developer Tools extension for Chrome browser

## Create an application to purchase products

1. Change to the your **working** directory in which you edit a copy of practice files

2. In Terminal: `create-react-app --scripts-version=react-scripts-ts a-5-purchase`

4. Change to the new **child** directory: `cd a-5-purchase`

5. Install other dependencies: `yarn add -D json-server prettier`

6. Copy files **from** your clone of the class repository **to** the new application:

    * In an Explorer or Finder window, copy the `db` subdirectory of the `a-5/purchase` subdirectory, and then in another Explorer or Finder window, paste the `db` subdirectory in the new `a-5-purchase` application directory

    * In the first Explorer or Finder window, copy all the files in the `src` subdirectory in the `a-5/purchase` subdirectory, and then in the second Explorer or Finder window, paste the files in the `src` subdirectory in the new `a-5-purchase` application (confirm that you are replacing some of the existing files)

    * In the second Explorer or Finder window, delete the `registerServiceWorker.ts` file in the `src` subdirectory in the new `a-5-purchase` application

    * In the first Explorer or Finder window, copy the `.prettierrc.json` and `tslint.json` files in the `a-5` directory, and then in the second Explorer or Finder window, paste the file in the new `a-5-purchase` application (confirm that you are replacing the existing files)

7. Open the `a-5-purchase` directory in your code editor

8. Open the `package.json` file, edit as follows, and then save your changes:

    * For the development server to pass requests to and responses from the data server, paste a property: `"proxy": "http://localhost:3001",`

    * To start a data server, paste a property at the beginning of the `"scripts"` object: `"server": "json-server ./db/db.json --port 3001 --watch --delay 2000",`

    * To format code, paste a property at the beginning of the `"scripts"` object: `"prettier": "prettier --write",`

9. In the first Terminal window, start the data server: `yarn server` or `npm run server`

10. In a second Terminal window, start the development server: `yarn start` or `npm start` and notice:

    * The table heading has gray background color while waiting for the response to a request for data
    * The second Terminal window displays a request: `GET /purchases?_expand=product`

11. After the application starts in a new tab of Chrome browser, to see “hot reloading” of changes, replace `React App` with `Purchase 5` in the `index.html` file in `public` subdirectory of the application, and then save your change

Will volunteers say which HTML elements are in this initial version of the `Purchase 5` application.

## Learning objectives

1. Describe structure and behavior as functions: given props and state, return elements.

2. Replace template languages with JavaScript for code and JSX for markup.

3. Build with components as if they are application-specific HTML elements.

4. Pass data down the “render tree” via props of descendant components.

5. Bind event handlers in class and function components.

6. Write callback functions to update the state of ancestor components.

7. Control the state of form elements.

8. Compose components to reuse code and separate concerns.

## function component

The **props** of a React component are analogous to attributes of an HTML or SVG element.

Given props as input, a **function** component returns elements as output.

Here is the minimal structure of a `MyComponent.tsx` file in TypeScript:

```js
import * as React from 'react'

type Props = {
    // key: type
}

const MyComponent = ({ /* destructuring */ }: Props) => (
    // elements
)

export default MyComponent
```

Will a volunteer say which ECMAScript statement you would add to the code if returned elements include **another** React component (for example, if a table returns elements which include rows).

In your code editor, open:

* the `a-5-purchase/db/db.json` file
* the `a-5-purchase/src/PurchaseRow.tsx` file
* the `a-5-purchase/src/PurchaseTable.tsx` file
* the `a-5-purchase/src/types.ts` file

## JSX

JSX is a syntax extension to JavaScript. Include JavaScript **expressions** inside curly braces.

Will a volunteer say an example in the `PurchaseRow.tsx` file where you don’t need curly braces.

Will another volunteer say a different example in the `PurchageTable.tsx` file where you don’t need curly braces.

> React implements a browser-independent DOM system for performance and cross-browser compatibility.

* In React, all DOM properties and attributes (including event handlers) are in camelCase. For example, the HTML attribute `tabindex` corresponds to the attribute `tabIndex` in React. The exception is `aria-*` and `data-*` attributes, which are in lowercase.
* To specify a CSS **class**, use the `className` attribute.
* Since `for` is a **reserved word** in JavaScript, React elements use `htmlFor` instead.
* The `onChange` event behaves as you would expect it to: **whenever** a form field is changed, this event occurs.
* The `style` attribute accepts a JavaScript **object** with camelCased properties rather than a CSS string.

**In pairs**:

* Someone take role of **navigator** to suggest what to do and why to do it
* Someone else take role of **pilot** to edit the file

For our first practice, add a column to a table.

1. In the `a-5-purchase/src/PurchaseTable.tsx` file, add at the right of the row a `th` element:

    * with class `code`
    * with child text `PLU code`

2. In the `a-5-purchase/src/PurchaseRow.tsx` file, add at the right of the row a `td` element:

    * with class `code`
    * with child expression `productId` (therefore add the variable to the destructuring)

3. See the new column in the browser tab after you save the changes to both files.

**Bonus**: [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)

## Create an application to fulfill orders

1. Change to the your **working** directory in which you edit a copy of practice files

2. In Terminal: `create-react-app --scripts-version=react-scripts-ts a-5-fulfill`

4. Change to the new **child** directory: `cd a-5-fulfill`

5. Install other dependencies: `yarn add -D json-server prettier`

6. Copy files **from** your clone of the class repository **to** the new application:

    * In an Explorer or Finder window, copy the `db` subdirectory of the `a-5/fulfill` subdirectory, and then in another Explorer or Finder window, paste the `db` subdirectory in the new `a-5-fulfill` application directory

    * In the first Explorer or Finder window, copy all the files in the `src` subdirectory in the `a-5/fulfill` subdirectory, and then in the second Explorer or Finder window, paste the files in the `src` subdirectory in the new `a-5-fulfill` application (confirm that you are replacing some of the existing files)

    * In the second Explorer or Finder window, delete the `registerServiceWorker.ts` file in the `src` subdirectory in the new `a-5-fulfill` application

    * In the first Explorer or Finder window, copy the `.prettierrc.json` and `tslint.json` files in the `a-5` directory, and then in the second Explorer or Finder window, paste the file in the new `a-5-fulfill` directory (confirm that you are replacing the existing files)

7. Open the `a-5-purchase` directory in your code editor

8. Open the `package.json` file, edit as follows, and then save your changes:

    * For the development server to pass requests to and responses from the data server, paste a property: `"proxy": "http://localhost:4001",`

    * To start a data server, paste a property at the beginning of the `"scripts"` object: `"server": "json-server ./db/db.json --port 4001 --watch --delay 2000",`

    * To format code, paste a property at the beginning of the `"scripts"` object: `"prettier": "prettier --write",`

9. In a third Terminal window, start the data server: `yarn server` or `npm run server`

10. In a fourth Terminal window, start the development server: `yarn start` or `npm start`

    * The table heading does not (yet) have gray background color while waiting for the response to a request for data
    * The second Terminal window displays a request: `GET /purchases?_expand=product`

11. After the application starts in a new tab of Chrome browser, to see “hot reloading” of changes, replace `React App` with `Fulfill 5` in the `index.html` file in `public` subdirectory of the application, and then save your change

**Change roles** to add another column to a table:

1. In the `a-5-fulfill/src/FulfillTable.tsx` file, add at the right of the row a `th` element:

    * with class `location`
    * with child text `Location`

2. In the `a-5-purchase/src/FulfillRow.tsx` file, add at the right of the row a `td` element:

    * with class `location`
    * with child expression `location` (therefore add the variable to the destructuring)

3. See the new column in the browser tab after you save the changes to both files.

**Bonus**: Read [DOM Elements](https://reactjs.org/docs/dom-elements.html)

## class component

How to **decide** between a function component and a class component?

* A **function** component depends **only on props**: given props as input, return elements as output.
* A **class** component depends on props and **its own private state** which changes when it handles events.

Here is the minimal structure of an `App.tsx` file in TypeScript:

```js
import * as React from 'react'

type Props = { … }
type State = { … }

class App extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props)
        this.state = { … }
    }

    // event handlers, or lifecycle methods, or both

    public render() {
        const { /* destructuring */ } = this.props
        const { /* destructuring */ } = this.state
        return ( … )
    }
}

export default App
```

Will a volunteer suggest a benefit of `React.Component<Props, State>` known as a generic type.

**Bonus**: [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

## setState

Although you assign the initial state in the constructor, you **never** assign to change the state of a component.

> The `setState` method enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses.

> Think of `setState` as a *request* rather than an immediate command to update the component.

The first argument is either:

* if change doesn’t depend on previous state: object which is (shallow) merged into the state

    ```js
    this.setState({ isGettingPurchases: true })
    ```

* if change does depend on previous state: updater function: `(statePrev, props) => stateChange`

    ```js
    this.setState(({ purchases }) => ({
        purchases: deletePurchase(purchases, id)
    }))
    ```

> The second argument is an optional callback function that will be executed after `setState` is completed and the component is re-rendered. Generally we recommend using `componentDidUpdate` for such logic instead.

**Bonus**: Read [setState](https://reactjs.org/docs/react-component.html#setstate)

## componentDidMount

Make sure that a component renders correctly before it receives a response to its request for data.

Look at the `a-5-fulfill/src/App.tsx` file:
* Will a volunteer say which function the `App` component calls to request data?
* Will another volunteer say what data it renders before it receives a response?

> Each component has several “lifecycle methods” that you can override to run code at particular times in the process.

> `componentDidMount` is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

**Bonus**: Read [componentDidMount](https://reactjs.org/docs/react-component.html#componentdidmount) and [componentWillUnmount](https://reactjs.org/docs/react-component.html#componentwillunmount)

## render

The `render` method of a class component returns elements analogous to a function component.

**Both together**:

1. In the `a-5-fulfill/src/App.tsx` file, in the `render` method:

    * Add `isGettingPurchases` to destructuring
    * Add `waiting={isGettingPurchases}` prop to `FulfillTable` element

2. In the `a-5-fulfill/src/FulfillTable.tsx` file, copy parts related to `waiting` from the `a-5-purchase/src/PurchaseTable.tsx` file.

3. Notice the gray background color after you refresh the `Fulfill 5` browser tab.

Will a volunteer say which style rule in `App.css` displays the gray background color.

## Bind arguments of event handlers

Given a function, the [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) method returns a new function that when called:

* has its `this` keyword set to the provided value
* has a sequence of zero or more arguments preceding any provided when the new function is called

Will a volunteer say what is the value of `this` and what (if any) arguments:

```js
onClick={onRemovePurchase.bind(null, id)}
```

Will another volunteer say what is the value of `this` and what (if any) arguments:

```js
public constructor (props: Props) {
    super(props)
    this.state = { … }

    this.onRemovePurchase = this.onRemovePurchase.bind(this);
}
```

Will a volunteer say in the assignment statement above:

* which `this.onRemovePurchase` is for the instance (at left or at right)
* which `this.onRemovePurchase` is defined on the `prototype` (at left or at right)

It is necessary to bind the `onRemovePurchase` callback function that is defined on the `prototype` if:

* it calls a method like `this.setState(…)`
* it refers to `this.props` or `this.state` of the instance

Let’s write more concise **class field** proposal for a future version of ECMAScript and bind via arrow function:

```js
public onRemove = (id: number) => {
    fetchDeletePurchase(id) // update server
    this.setState(…) // update interface
}
```

**Both individually** add a column for `Remove` button at the right of each row:

1. In the `a-5-purchase/src/App.tsx` file, add `onRemove={this.onRemove}` as prop of `PurchaseTable` element (notice the temporary problem, so don’t save your change yet)

2. In the `a-5-purchase/src/PurchaseTable.tsx` file:

    * Add `onRemove: (id: number) => void` to `Props` type
    * Add `onRemove` to destructuring
    * Add `onRemove={onRemove}` as prop of `PurchaseRow` element (notice the temporary problem, so don’t save your change yet)
    * Add at the right of the row a `th` element with class `remove` with child text `Remove`

3. In the `a-5-purchase/src/PurchaseRow.tsx` file:

    * Add `onRemove: (id: number) => void` to `Props` type
    * Add `onRemove` to destructuring
    * Add `id` to destructuring of `purchase` prop
    * Add at the right of the row a `td` element:
        ```html
        <td className="remove">
            <button onClick={onRemove.bind(null, id)}>Remove</button>
        </td>
        ```

4. Save your changes to the 3 `.tsx` files, and then see the page “hot reload” in the browser tab

5. Look at the `a-5-purchase/db/db.json` file before and after you click a `Remove` button

Will a volunteer explain the difference between `id` and `productId` especially in this context.

**Bonus**: [Handling Events](https://reactjs.org/docs/handling-events.html)

## controlled elements, part 1

> In HTML, form elements such as `<input>`, `<textarea>`, and `<select>` typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with `setState`.

> We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.

**Both take turns** add a column for fulfilled check box at the left of each row:

1. One person: At then end of the `a-5-fulfill/src/fetch.ts` file, implement `fetchPatchFulfilled` function (for the properties of the second argument, see the `a-4/src/06-fetch.ts` file :)

2. Other person: At then end of the `a-5-fulfill/src/logic.ts` file, implement `toggleFulfilled` as a pure function (decide which array method :)

3. In the `a-5-fulfill/src/App.tsx` file:

    * Add `fetchPatchFulfilled` to import from `./fetch`
    * Import `getFulfilled` and `toggleFulfilled` from `./logic`
    * Delete `/*` and `*/` comments in block of `onChangeFulfilled` method
    * Add `onChangeFulfilled={this.onChangeFulfilled}` as prop of `FulfillTable` element (notice the temporary problem, so don’t save your change yet)

4. In the `a-5-fulfill/src/FulfillTable.tsx` file:

    * Add `onChangeFulfilled` to `Props` type, to destructuring, and as prop of `FulfillRow` element (notice the temporary problem, so don’t save your change yet)
    * Add at the left of the row a `th` element with class `fulfilled` with `{'\u2714'}` expression for heavy check mark as child text

5. In the `a-5-fulfill/src/FulfillRow.tsx` file:

    * Add `onChangeFulfilled` to `Props` type and to destructuring
    * Add `id` and `fulfilled` to destructuring of `purchase` prop
    * Add at the left of the row a `td` element with class `fulfilled` and child `input` element:
        ```html
        <input type="checkbox" value={fulfilled} onChange={onChangeFulfilled.bind(null, id)} />
        ```

Will a volunteer say in the `a-5-fulfill/src/logic.ts` file:
* Why is `as Purchase` type cast after array `find` method.
* What problem does destructuring and renaming solve in `({id: purchaseId}) => purchaseId === id`

**Bonus**: Read [Forms](https://reactjs.org/docs/forms.html)

## display the waiting state, part 1

When a customer clicks a `Remove` button, purchase application removes the row from the table optimistically before it receives a response to the `DELETE` request.

When an employee clicks a check box, the fulfill application will disable the check box and display the row with a gray background color while it is waiting to receive a response to the `PATCH` request.

Will a volunteer suggest a reason for this difference in visual feedback.

**Both together**:

1. In the `a-5-fulfill/src/App.tsx` file:

    * Add `IsPatchingFulfilled` to import from `./types`
    * Add `isPatchingFulfilled: IsPatchingFulfilled` to `State` type
    * Add `isPatchingFulfilled: {}` to initial state in class constructor
    * Replace `onChangeFulfilled` method with the following:
        ```js
        public onChangeFulfilled = (id: number) => {
            this.setState(
                ({ isPatchingFulfilled, purchases }) => ({
                    isPatchingFulfilled: { ...isPatchingFulfilled, [String(id)]: true },
                    purchases: toggleFulfilled(purchases, id)
                }),
                () => {
                    fetchPatchFulfilled(id, getFulfilled(this.state.purchases, id)).then(() => {
                        this.setState(({ isPatchingFulfilled }) => ({
                            isPatchingFulfilled: { ...isPatchingFulfilled, [String(id)]: false }
                        }))
                    })
                }
            )
        }
        ```
    * In `render` method add `isPatchingFulfilled` to destructuring and as prop of `FulfillTable` element

2. In the `a-5-fulfill/src/FulfillTable.tsx` file:

    * Add `IsPatchingFulfilled` to import from `./types`
    * Add `isPatchingFulfilled: IsPatchingFulfilled` to `Props` type
    * Add `isPatchingFulfilled: {}` to destructuring
    * Add `waiting={isPatchingFulfilled[String(purchase.id)]}` as prop of `FulfillRow` element

3. In the `a-5-fulfill/src/FulfillRow.tsx` file:

    * Add `waiting` prop to `Props` type and destructuring
    * Add `className` to `tr` element similar to `table` element in `FulfillTable.tsx` file
    * Add `disabled={waiting}` prop to `input` element

4. After you save your changes to the 3 files:

    * Click a check box, and then see if you can click it again while the row is gray
    * Chick a check box, and then see if you can click a different check box while the other row is gray

Will 3 volunteers each explain one of the following:

* The `IsPatchingFulfilled` interface in the `a-5-fulfill/src/types.ts` file
* The step-by-step state changes in the `onChangeFulfilled` method
* The step-by-step `isPatchingFulfilled` or `waiting` props passed from `App.tsx` to `FulfillTable.tsx` to `FulfillRow.tsx`

**Bonus**: Read [Visibility of System Status](https://www.nngroup.com/articles/visibility-system-status/) especially Compel Users to Action

## controlled elements and waiting state, part 2

Let’s implement a form for customers to enter code and quantity of a product to purchase.

Will a volunteer say which HTTP verb for a request to add an object to `purchases` array.

Will another volunteer say why `PostablePurchase` interface differs from `Purchase` interface in the `a-5-purchase/src/types.ts` file

**In pairs**:

1. One person: add a `fetchPostPurchase` function to the `a-5-purchase/src/fetch.ts` file (for the properties of the second argument, see the `a-4/src/06-fetch.ts` file :)

    * Let the input argument have `PostablePurchase` type
    * Let the output return type be `Promise<Purchase>` type

2. Other person: add a pure `prependPurchase` function to the `a-5-purchase/src/logic.ts` file

## sort purchases in reverse order

Will a volunteer say why did we prepend instead of append.

Will another volunteer say in which order the purchases are in response to initial `GET` request.

**Both together**: In the `a-5-purchase/src/fetch.ts` file, add a `then` method to sort the purchases in reverse order by id. For more information search for `sort` method on Mozilla Developer Network.

## stretch goal

Add a `PurchaseForm` component, so customer can:

1. Type a PLU code, and then click the `Enter` button. Get the product, and then display the description.
2. Type a quantity, and then click the `OK` or `Cancel` button. Post the purchase.

Will a volunteer say whether it will be a function or class component, and why.

**Both together**:

1. In a new `a-5-purchase/src/PurchaseForm.tsx` file:
    * Declare in `Props` type: `onSubmit` callback function (what is its input and output)
    * Declare as `State` type:
        ```js
        type State = {
            valueCode: string
            isCodeReady: boolean
            productId: number | null
            isGettingProduct: boolean
            product: Product | null
            valueQuantity: string
            isQuantityReady: boolean
            isPostingPurchase: boolean
        }
        ```
    * In `render` method, return any of the following HTML elements: `form`, `fieldset`, `label`, `input`, button
    * Define methods: `onSubmitCode`, `onSubmitQuantity`, `onCancelQuantity`

2. In the `a-5-purchase/src/App.tsx` file, add an `onPrepend` method and add component to `render` method:
    ```js
    return (
        <>
            <PurchaseForm onSubmit={this.onPrepend} />
            <PurchaseTable onRemove={this.onRemove} purchases={purchases} waiting={isGettingPurchases} />
        </>
    )
    ```

## composition

> Some components don’t know their children ahead of time. This is especially common for components like Sidebar or Dialog that represent generic boxes. We recommend that such components use the special `children` prop.

Let’s add a generic modal box whose specific child displays choices if a customer orders more of a product:

* Add both quantities
* Keep only the previous quantity
* Keep only the new quantity

**Both together**:

1. In the `a-5-purchase/src/PurchaseForm.tsx`file:
    * In submit quantity method, find a previous purchase (if any) using a new `purchases` prop
    * If there is a previous purchase, set a new property in state
    * In `render` method, if new property is truthy, then display `ConfirmMultiple` element as a child of `ModalBox` element following the `form` elements

2. In the `a-5-purchase/src/App.tsx` file, add to `PurchaseForm` element `onRemove` and `purchases` props

**Bonus**: Read [Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)
