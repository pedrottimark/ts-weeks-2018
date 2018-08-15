# React, part 2: Redux and glamorous

## Get the class files

In a Terminal window:

1. Move to the `ts-weeks-2018` directory into which you cloned the repository

2. `git status`

3. If there are any unwanted files, remove them

4. Only if there are any changes:

    * `git add --all`
    * `git commit -m "My changes to files in week b-5"`

5. Only if you are not already on master branch: `git checkout master`

6. `git pull`

7. Only if you didn’t ever do:

    * In Terminal: `npm install --global create-react-app`
    * Go to [https://reactjs.org/community/debugging-tools.html](https://reactjs.org/community/debugging-tools.html) and then follow the link to install React Developer Tools extension for Chrome browser

## Create an application for Redux and glamorous

1. Change to a **working** directory in which you can create new React applications

2. In Terminal: `create-react-app --scripts-version=react-scripts-ts b-6-redux-glamorous`

3. Change to the new **child** directory: `cd b-6-redux-glamorous`

4. Install other dependencies:

    * If `yarn` is installed on your computer: `yarn add --exact glamor glamorous react-redux redux`
    * Otherwise: `npm install --save-exact glamor glamorous react-redux redux`

5. Install other devDependencies:

    * If `yarn` is installed on your computer: `yarn add --dev --exact prettier redux-logger @types/redux-logger @types/react-redux`
    * Otherwise: `npm install --save-dev --save-exact prettier redux-logger @types/redux-logger @types/react-redux`

6. Copy files **from** your clone of the class repository **to** the new application:

    * In the first Explorer or Finder window, copy all the files in the `src` subdirectory in the `b-6/redux-glamorous` subdirectory, and then in the second Explorer or Finder window, paste the files in the `src` subdirectory in the new `b-6-redux-glamorous` application (confirm that you are replacing existing files)

    * In the second Explorer or Finder window that displays the new `b-6-redux-glamorous` application, delete the `src/App.test.tsx`, `src/logo.svg`, and `src/registerServiceWorker.ts` files

    * In the first Explorer or Finder window, copy the `.prettierrc.json` and `tslint.json` files in the `b-6` directory (to see the `.prettierrc.json` file, you might need to hold down Command and Shift keys and press period) and then in the second Explorer or Finder window, paste the file in the new `b-6-redux-glamorous` application (confirm that you are replacing existing files)

7. Open the `b-6-redux-glamorous` directory in your code editor

8. Open the `package.json` file, edit as follows, and then save your changes:

    * To format code, paste a property at the beginning of the `"scripts"` object: `"prettier": "prettier --write",`

9. In Terminal: `yarn start` or `npm start`

10. After the application starts in a new tab of Chrome browser:

    * open the `Console` pane
    * to see “hot reloading” of changes, replace `React App` with `b-6 Redux glamorous` in the `public/index.html` file, and then save your change

## How to run prettier

If there are style problems when you edit a file (for example, `src/Whatever.tsx`) save your changes, and then do one of the following in Terminal:

* `yarn prettier src/Whatever.tsx`
* `npm run prettier src/Whatever.tsx`

## Overview of first application

The application has minimal state of one number.

To increase or decrease the number at the left, click `increment` or `decrement` button at the right. But nothing happens until we connect components to the Redux store.

The render tree has enough levels that [lifting state up](https://reactjs.org/docs/lifting-state-up.html) to the closest common ancestor would contradict “loose coupling” principle, because intermediate components pass props (which are irrelevant to them) from their parent to their child. In this example, the extra levels are artificial.

## Learning objectives for Redux

1. Read and write action creator functions (including type annotations).

2. Read and write cases of `switch` statement in reducer functions.

3. Read test for reducer function.

4. Map action creator functions or state to props in “connected” components.

5. Read and write thunk functions for asynchronous or conditional actions.

## Redux concepts

[Redux](https://redux.js.org/introduction/motivation) attempts to make state mutations predictable by imposing certain restrictions on how and when updates can happen. These restrictions are reflected in the [three principles](https://redux.js.org/introduction/threeprinciples) of Redux:

* The state of your whole application is stored in an object tree within a single **store**.

* The only way to change the state is to emit an **action**, an object describing what happened.

* To specify how the state tree is transformed by actions, you write pure **reducers**.

Let’s look at the diagrams in article [When do I know I’m ready for Redux?](https://medium.com/dailyjs/when-do-i-know-im-ready-for-redux-f34da253c85f)

Let’s look at the diagrams in slides 8 through 18 in presentation [Redux from Twitter hype to production](http://slides.com/jenyaterpil/redux-from-twitter-hype-to-production#/8)

### state

> In Redux, all the application **state** is stored as a single object. It’s a good idea to think of its shape before writing any code. What’s the minimal representation of your app’s state as an object?

### actions

> **Actions** are payloads of information that send data from your application to your store. They are the *only* source of information for the store.

See `src/actions.ts` for action creator functions

### reducer

> The **reducer** takes the previous state and an action, and returns the next state.

> The reducer must be pure. **Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.**

See `src/reducers` subdirectory for reducer functions.

### store

> The **store** is the object that brings them together. The store has the following responsibilities:

* Holds application state
* Allows access to state via `getState()`
* Allows state to be updated via `dispatch(action)`
* Registers listeners via `subscribe(listener)`
* Handles unregistering of listeners via the function returned by `subscribe(listener)`

Instead of the calling store methods directly, we will use the `react-redux` package.

* Analogy for passing **props**: To withdraw small amount of cash from drive-up ATM machine, passenger hands card to driver.
* Analogy for passing through via **context**: To deposit large amount of cash from farthest drive-through lane, teller sends pneumatic tube (so people do not pass cash from car to car).

> You’ll only have a **single store** in a Redux application.

> When you want to split your data handling logic, you'll use **reducer composition** instead of many stores.

For an example of function closure pattern for singleton object without class, see lines 56–60, 98–99 in [Slim Redux in 99 lines](https://gist.github.com/gaearon/ffd88b0e4f00b22c3159)

```js
export function createStore(reducer, initialState) {
  var currentReducer = reducer;
  var currentState = initialState;
  var listeners = [];
  var isDispatching = false;
  …
  return { dispatch, subscribe, getState, replaceReducer };
}
```

## React Redux

[React bindings for Redux](https://redux.js.org/basics/usagewithreact) embrace the idea of separating presentational and container components.

* Presentational: How things **look** (markup, styles). Read data from props. Invoke callbacks from props.

* Container: How things **work** (data fetching, state updates). Subscribe to Redux state. Dispatch Redux actions

## Redux Logger

The [redux-logger](https://www.npmjs.com/package/redux-logger) package displays actions in the console.

## Practice for synchronous Redux

1. In the `src/actions.ts` file, see for each synchronous action:

    * a string for its `type` property in enumerated `ActionTypes` (for example, `CHANGE_COUNT = 'CHANGE_COUNT'`)
    * an interface in the union type of all `Actions` (for example, `ChangeCountAction`)
    * any additional properties in an interface that extends `Action` (for example, `delta: number`)
    * an action creator function that returns an action object (for example, `changeCount`)
    * remember the key of the additional property in the action object for step 4

2. In the `src/reducers/index.test.ts` file see tests:

    * given the previous state and an action, reducer function returns the next state
    * `reduce` method of actions array with reducer function and initial state as arguments

3. In another Terminal: `yarn test index` or `npm test index` and see 2 tests failed

4. In the `src/reducers/index.ts` file:

    * see how to set initial state
    * see that `switch` statement has `default` case which returns unchanged state for irrelevant action types
    * add `ActionTypes` to named exports from `../actions`
    * add `case ActionTypes.CHANGE_COUNT:` followed by `return state + TODO` and replace `TODO` with the property of the `action` object that you remembered in step 1, and then save your change

5. In Terminal, see 2 tests passed (to quit the tests, click in the pane, and then type `q`)

6. In the `src/index.tsx` file:

    * import some named exports from packages related to Redux:

        ```js
        import { Provider } from 'react-redux'
        import { applyMiddleware, createStore } from 'redux'
        import { createLogger } from 'redux-logger'
        ```

    * create a store for the reducer function and with a logger:

        ```js
        import reducer from './reducers'

        const logger = createLogger({ collapsed: true })
        const store = createStore(reducer, applyMiddleware(logger))
        ```

    * to make the Redux store available via React [context](https://reactjs.org/docs/context.html), replace `<App />` with the following:

        ```html
        <Provider store={store}>
            <App />
        </Provider>,
        ```

7. In the `src/Input.tsx` file:

    * import named exports to be able to dispatch an action to the Redux store:

        ```js
        import { connect } from 'react-redux'

        import { changeCount } from './actions'
        ```

    * to connect an action creator function to the Redux store, replace `export default Input` with:

        ```js
        const mapDispatchToProps = { changeCount }

        export default connect(null, mapDispatchToProps)(Input)
        ```

    * to define the prop of the React component, replace `const Input = () => (` with:

        ```js
        type Props = {
            changeCount: (delta: number) => void
        }

        const Input = (props: Props) => (
        ```

    * add `onClick={props.changeCount.bind(null, 1)}` as a prop to the increment button

    * add `onClick={props.changeCount.bind(null, -1)}` as a prop to the decrement button

    * save your changes, and then see actions in the `Console` pane when you click buttons

8. In the `src/Output.tsx` file:

    * import named export to be able to map Redux state to component prop:

        ```js
        import { connect } from 'react-redux'
        ```

    * to map Redux state to component prop, replace `export default Output` with:

        ```js
        // This is an example of minimal state which is one number value.
        const mapStateToProps = (count: number) => ({
            count
        })

        export default connect(mapStateToProps)(Output)
        ```

    * to define the prop of the React component, replace `const Output = () => <span>{0}</span>` with:

        ```js
        type Props = {
            count: number
        }

        const Output = ({count}: Props) => <span>{0}</span>
        ```

    * to render the `count` prop as a child of the `span` element, replace `<span>{0}</span>` with:

        ```html
        <span>{count}</span>
        ```

    * save your changes, and then see the rendered result of changes to state when you click buttons

## glamorous

Let’s watch [A Unified Styling Language](https://www.youtube.com/watch?v=X_uTCnaRe94) by Mark Dalgleish (29 minutes)

The goal of the [glamorous](https://glamorous.rocks/) package is maintainable CSS with React.

> For every DOM element, there is an associated glamorous component factory attached to the glamorous function.

> With glamorous, instead of the normal CSS syntax you maybe familiar with, we use regular JavaScript objects.

Here is a style rule for `h1` element in CSS:

```css
h1 {
    font-size: 1rem;
    padding: 1.5rem;
    background-color: #dddddd;
}
```

Here is `Header` component which renders styled `h1` element with glamorous:

```js
import glamorous from 'glamorous'

const Heading = glamorous.h1({
    fontSize: '1rem',
    padding: '1.5rem',
    backgroundColor: '#dddddd',
})
```

## Learning objectives for glamorous

1. Convert CSS style rule to JavaScript style object.

    * Change hyphenated property names to camelCase.
    * Surround property values with quote marks.
    * Replace semicolons with commas.

2. Define reusable React component with glamorous factory function and style object.

3. Factor out repeated style property values.

4. Provide variable style property values as props of reusable component.

5. Express `:hover` pseudo-class as `':hover'` property which has style object as its value.

## Practice for glamorous

1. In the `src/index.css` file, see global style rules.

2. In the `src/App.css` file, see element style rules which you will move to style objects in components.

3. Comment out the `h1` style rule, and then in the `src/Header.tsx` file:

    * add `import glamorous from 'glamorous'`
    * add `const Heading = glamorous.h1()`
    * copy block from style rule and paste as argument of factory function
    * convert properties
    * in rendered result of `Header` function component, replace `h1` with `Heading`

4. Comment out the `main` style rule, and then in the `src/Main.tsx` file:

    * add an `import` statement for glamorous
    * add `const MainStyled = glamorous.main()`
    * copy block from style rule and paste as argument of factory function
    * convert properties
    * in rendered result of `Header` function component, replace `main` with `MainStyled`

5. Comment out 3 `section` style rules, and then create a **new** `src/Section.tsx` file:

    * add an `import` statement for glamorous
    * add the following so each instance can have a different background color:

        ```js
        type Props = {
            backgroundColor: string
        }

        const Section = glamorous.section<Props>(props => ())

        export default Section
        ```

    * copy block from first `section` style rule and paste as argument of factory function
    * convert properties
    * add property at end of style object: `backgroundColor: props.backgroundColor`

6. In the `src/Left.tsx` file:

    * add an `import` statement for the `Section` component
    * in rendered result of `Left` function component, replace `section` with `Section`
    * add `backgroundColor` prop whose value is from `section:nth-child(1)` rule in `src/App.css` file

7. In the `src/Right.tsx` file:

    * add an `import` statement for the `Section` component
    * in rendered result of `Left` function component, replace `section` with `Section`
    * add `backgroundColor` prop whose value is from `section:nth-child(2)` rule in `src/App.css` file

8. Comment out the `span` style rule, and then in the `src/Output.tsx` file:

    * add an `import` statement for glamorous
    * add `const Span = glamorous.span()`
    * copy block from style rule and paste as argument of factory function
    * convert properties
    * in rendered result of `Output` function component, replace `span` with `Span`

9. Comment out 5 `button` style rules, and then create a **new** `src/Button.tsx` file:

    * add an `import` statement for glamorous
    * add the following so each instance can have different background colors:

        ```js
        type Props = {
          backgroundColor: string
          backgroundColorHover: string
        }

        const Button = glamorous.button<Props>(props => ())

        export default Button
        ```

    * copy block from `button` style rule and paste as argument of factory function
    * convert properties
    * add properties at end of style object: `backgroundColor: props.backgroundColor`

        ```js
        backgroundColor: props.backgroundColor,
        ':hover' : {
            backgroundColor: props.backgroundColorHover
        }
        ```

10. In the `src/Input.tsx` file:

    * add an `import` statement for the `Button` component
    * in rendered result of `Input` function component, replace `button` with `Button`
    * add `backgroundColor` and `backgroundColorHover` props whose values are from `button` rules in `src/App.css` file

## Redux Thunk

Let’s look at the diagrams in slides 22 through 25 in presentation [Redux from Twitter hype to production](http://slides.com/jenyaterpil/redux-from-twitter-hype-to-production#/22)

The [redux-thunk](https://www.npmjs.com/package/redux-thunk) package:

* Is middleware which allows you to write action creators that return a **function** instead of an action.
* The thunk can be used to **delay** the dispatch of an action, or to dispatch only if a certain condition is met.
* The **inner function** receives the store methods dispatch and getState as arguments.

## Create an application for Redux Thunk

This application is JavaScript instead of TypeScript :)

1. Change to a **working** directory in which you can create new React applications

2. In Terminal: `create-react-app b-6-redux-thunk`

3. Change to the new **child** directory: `cd b-6-redux-thunk`

4. Install other dependencies:
    * If `yarn` is installed on your computer: `yarn add --exact react-redux redux redux-thunk`
    * Otherwise: `npm install --save-exact react-redux redux redux-thunk`

5. Install other devDependencies:
    * If `yarn` is installed on your computer: `yarn add --dev --exact json-server redux-logger`
    * Otherwise: `npm install --save-dev --save-exact json-server redux-logger`

6. Copy files **from** your clone of the class repository **to** the new application:

    * In an Explorer or Finder window, copy the `db` subdirectory of the `b-6/redux-thunk` subdirectory, and then in another Explorer or Finder window, paste the `db` subdirectory in the new `b-6-redux-thunk` application directory

    * In the first Explorer or Finder window, copy all the files in the `src` subdirectory in the `b-6/redux-thunk` subdirectory, and then in the second Explorer or Finder window, paste the files in the `src` subdirectory in the new `b-6-redux-thunk` application (confirm that you are replacing some of the existing files)

    * In the second Explorer or Finder window that displays the new `b-6-redux-thunk` application, delete the `src/App.test.js`, `src/logo.svg`, and `src/registerServiceWorker.js` files

7. Open the `b-6-redux-thunk` directory in your code editor

8. Open the `package.json` file, edit as follows, and then save your changes:

    * To be able to run both applications, add `PORT=4000` and space at beginning of `"start"` property of the `"scripts"` object:

    * To start a data server, paste a property at the beginning of the `"scripts"` object: `"server": "json-server --port 4001 --delay 2000 --watch ./db/db.json --static ./build",`

    * For the development server to pass requests to and responses from the data server, paste a property: **above** the `"scripts"` object: `"proxy": "http://localhost:4001",`

9. In the first Terminal window, start the data server: `yarn server` or `npm run server`

10. In a second Terminal window, start the development server: `yarn start` or `npm start`

11. After the application starts in a new tab of Chrome browser:

    * open the `Console` pane
    * to see “hot reloading” of changes, replace `React App` with `b-6 Redux Thunk` in the `public/index.html` file, and then save your change

## Overview of second application

Inspired by information from [The Nutrition Source](https://www.hsph.harvard.edu/nutritionsource/) at Harvard T.H. Chan School of Public Health.

The application has four areas:

* a water glass drawing and external links at the lower edge
* a message appears at the upper edge if there is an error
* portions at the upper left: click a portion to open a form and change its quantity
* fluids at the right: click a fluid to add (or increment) a portion of it

The application state includes `quantity` property in an array of portions of foods (limited to liquids) consumed today.

* The actions to open and close a portion quantity form are **synchronous**, therefore have action creator functions.

* The CRUD actions to fetch portion objects are **asynchronous**, therefore have thunk functions. The updates are conservative (that is, update the interface after a request succeeds).

## Review of react-redux and preview of redux-thunk

1. In the `src/index.js` file, see where you **provide** the Redux store to the application

2. In the `src/App.js` file, see how to **connect** a component to the Redux store:

    * `mapStateToProps` is a function which given properties from the Redux store, returns **props** for the component, which uses them in its `render` method (in this example, key and value is the same in store and component)

    * `mapDispatchToProps` is an object whose properties are action creator functions which are bound to the `dispatch` method of the Redux store and included as **props** of the component, which calls it in its `componentDidMount` method

    * `export default connect(mapStateToProps, mapDispatchToProps)(App);` exports the connected component

3. In the `src/actions.js` file, see the `getFoodsPortions` function which calls `dispatch`:

    * with `{type: 'FETCH_GET_WAITING'}` action **before** it calls `fetch`
    * with `{type: 'FETCH_GET_SUCCESS', …}` action if promise is fulfilled
    * with `{type: 'FETCH_GET_FAILURE', …}` action if promise is rejected

    and see that [`then`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) method has two arguments: callback functions for the success and failure cases of the Promise instead of `catch` method, because we will add an error boundary

4. In the `src/reducers/foods.js` file, see conversion from array to ECMAScript 2015 Map

5. In the `src/reducers/message.js` file, see property of state when promise is rejected (displayed in `render` method of connected `App` component)

6. In the `src/App.js` file, see that it doesn’t provide props to `Portions` and `Foods` elements (that is, it does not apply the [“lifting state up”](https://reactjs.org/docs/lifting-state-up.html) pattern because the data is in Redux store instead of component state)

## Practice for asynchronous Redux

1. Apply the example of `src/App.js` file in the `src/Foods.js` file to connect component to Redux store:

    * delete last line, and then `/*` and `*/` comments
    * map state to props: `foodMap`, `isFetchingIds`, `isRenderingFormId`
    * map dispatch to props: `addFood`
    * export connected component

2. In the `src/actions.js` file apply the pattern of `dispatch` function call with action object `{type: 'FETCH_PUT_FAILURE', …}` at the two `// TODO` comments

3. In the `src/reducers/portions.js` file, write pure callback functions:

    * for `case 'FETCH_PUT_SUCCESS'` assuming that `action.portion` is the new updated object, delete surrounding comment, and then replace `TODO` with JavaScript expression

    * for `'FETCH_DELETE_SUCCESS'` assuming that `action.portionId` identifies the portion to delete, delete surrounding comment, and then replace `TODO` with JavaScript expression

## Practice for error boundaries

> [Error boundaries](https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries) are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

1. To see the problem:

    * edit the `db/db.json` file to mess up the `foodId` property of a portion object so there isn’t a food object which has corresponding `id` property (for example, replace `"foodId": "sugary_drinks"` with `"foodId": "sugary_drink"`)
    * save the change
    * refresh the browser tab

2. Stop the development server, and then:

    * in Terminal: `yarn build` or `npm run build`
    * notice the new `build` subdirectory
    * in the browser tab, replace the address with `http://localhost:4001/`

3. To fix the problem, in the `src/App.js` file:

    * add `import` statement for `MainErrorBoundary` component
    * in returned value of `render` method, surround `Category` element with `MainErrorBoundary` element

4. In the `src/MainErrorBoundary.js` file, see:

    * `constructor` initializes component state
    * `componentDidCatch` lifecycle method sets component state
    * `render` method has ternary expression to provide `className` prop and omit `children` if there has been an error
    * `componentDidCatch` lifecycle method also calls connected synchronous action creator function

5. In the `src/actions.js` file, see the `catchError` action creator function

6. In the `src/reducers/message.js` file, see `case 'CATCH_ERROR':` for action

## Move component state to Redux store

1. In the `src/reducers` subdirectory, create a `hasCaughtError.js` file:

    * export default reducer function whose initial state is `false`
    * include `case 'CATCH_ERROR': return true;` in `switch` statement

2. In the `src/reducers/index.js` file:

    * add an `import` statement for `hasCaughtError` reducer
    * add `hasCaughtError` to object argument of `combineReducers` function

3. In the `src/MainErrorBoundary.js` file:

    * add `mapStateToProps` for `hasCaughtError` property of Redux store
    * replace `null` with `mapStateToProps` in `connect` function call
    * comment out `constructor` of `MainErrorBoundary` component
    * comment out `this.setState` call in `componentDidCatch` lifecycle method
    * replace `this.state.hasCaughtError` with `this.props.hasCaughtError` in `render` method`

4. In Terminal: `yarn build` or `npm run build`

5. Refresh the browser tab to see same result with property in Redux store instead of component state

6. In the `db/db.json` file, fix the messed up `foodId` property.

7. Refresh the browser tab
