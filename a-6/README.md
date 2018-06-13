# React, part 2

## Get the class files

In a Terminal window:

1. Move to the `ts-weeks-2018` directory into which you cloned the repository
2. `git pull`

Only if you were not here last week: In Terminal:

* `npm install --global create-react-app`
* Go to [https://reactjs.org/community/debugging-tools.html](https://reactjs.org/community/debugging-tools.html) and then follow the link to install React Developer Tools extension for Chrome browser

## Redux

### Create an application

1. Change to the your **working** directory in which you edit a copy of practice files

2. In Terminal: `create-react-app --scripts-version=react-scripts-ts a-6-redux`

4. Change to the new **child** directory: `cd a-6-redux`

5. Install other dependencies:
    * `yarn add react-redux @types/react-redux redux @types/redux`
    * `yarn add -D json-server prettier`

6. Copy files **from** your clone of the class repository **to** the new application:

    * In an Explorer or Finder window, copy the `db` subdirectory of the `a-6/redux` subdirectory, and then in another Explorer or Finder window, paste the `db` subdirectory in the new `a-6-redux` application directory

    * In the first Explorer or Finder window, copy all the files in the `src` subdirectory in the `a-6/redux` subdirectory, and then in the second Explorer or Finder window, paste the files in the `src` subdirectory in the new `a-6-redux` application (confirm that you are replacing some of the existing files)

    * In the second Explorer or Finder window, delete the `App.test.tsx` and `logo.svg` and `registerServiceWorker.ts` files in the `src` subdirectory in the new `a-6-redux` application

    * In the first Explorer or Finder window, copy the `.prettierrc.json` and `tslint.json` files in the `a-6` directory, and then in the second Explorer or Finder window, paste the file in the new `a-6-redux` application (confirm that you are replacing the existing files)

7. Open the `a-6-redux` directory in your code editor

8. Open the `package.json` file, edit as follows, and then save your changes:

    * For the development server to pass requests to and responses from the data server, paste a property: `"proxy": "http://localhost:3001",`

    * To start a data server, paste a property at the beginning of the `"scripts"` object: `"server": "json-server ./db/db.json --port 3001 --watch --delay 2000",`

    * To format code, paste a property at the beginning of the `"scripts"` object: `"prettier": "prettier --write",`

9. In the first Terminal window, start the data server: `yarn server` or `npm run server`

10. In a second Terminal window, start the development server: `yarn start` or `npm start`

11. After the application starts in a new tab of Chrome browser, to see “hot reloading” of changes, replace `React App` with `Redux 6` in the `index.html` file in `public` subdirectory of the application, and then save your change

### Questions to ask before you add a dependency to a project

What **problem** does it solve? Answers from [React Context](https://reactjs.org/docs/context.html)

> With React, it's easy to track the flow of data through your React components. When you look at a component, you can see which props are being passed, which makes your apps easy to reason about.

> In some cases, you want to pass data through the component tree without having to pass the props down manually at every level.

> State management libraries like [Redux](http://redux.js.org) or [MobX](https://mobx.js.org/) and their React bindings are a good choice for managing state that is relevant to many components.

How does it affect **people** who use the application? Answers from [Redux Read Me](http://redux.js.org/)

> Redux helps you write applications that behave consistently, run in different environments, and are easy to test.

> The beauty of this pattern is how well it scales to large and complex apps.

> It is possible to trace every mutation to the action that caused it. You can record user sessions and reproduce them just by replaying every action.

Why is it **better** than the alternatives? Answers from [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)

> Redux offers a tradeoff. It asks you to:

> Describe application state as plain objects and arrays.
> Describe changes in the system as plain objects.
> Describe the logic for handling changes as pure functions.

> But if you trade something off, make sure you get something in return.

> If you’re just learning React, don’t make Redux your first choice. Instead learn to think in React.

### Learning objectives

1. Write action creator functions.

2. Write cases of `switch` statement in reducer functions.

3. Read test for reducer function.

4. Map action creator functions and state to props in “connected” components.

### Redux concepts

For diagrams of concepts, see [When do I know I’m ready for Redux?](https://medium.com/dailyjs/when-do-i-know-im-ready-for-redux-f34da253c85f)

### state

> In Redux, all the application **state** is stored as a single object. It’s a good idea to think of its shape before writing any code. What’s the minimal representation of your app’s state as an object?

Look at the “shape” of the state for theme and visibility:
* in the `db/db.json` file
* in the `src/types.ts` file

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

See `src/reducers/index.js` for `combineReducers` function.

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

### decrementVisibility challenge

1. In terminal: `yarn test visibility`

2. In the `a-6-redux/src/actions.ts` file, implement action creator to decrement visibility, similar to increment visibility

3. In the `a-6-redux/src/reducers/visibility.ts` file, implement `case` to decrement visibility, similar to increment visibility

4. In the `a-6-redux/src/reducers/visibility.test.ts` file, test decrement visibility:
    * Delete `//` preceding `decrementVisibility` in `import`
    * Add `//` preceding `/*` and `*/` surrounding `describe` block

5. In the `a-6-redux/src/VisibilityFieldset.tsx` file, implement decrement visibility:
    * Add `onClick` prop to the first `button` element
    * Add `decrementVisibility` throughout, similar to `incrementVisibility`

### fetch challenge

1. Create a new `a-6-redux/src/fetch.ts` file:
    * Export a `fetchGetTheme` function for route `'/theme'`
    * Export a `fetchGetVisibility` function for route `'/visibility'`

2. In the `componentDidMount` method in `a-6-redux/src/App.tsx` file:
    * Import the two fetch functions
    * Add `Promise.all` for the two fetch functions
    * Move the existing `this.props.initializeVisibility` and `this.props.setTheme` function calls into `then` method with the returned object arguments `theme` and `visibility` instead of the hard-coded literal objects (find the example in `a-4` files :)

##3 theme challenge

For a bonus challenge, add a `ThemeFieldset` component which consists of radio buttons to select theme: `green`, `teal`, or `blue`

### fetching challenge

Add a `fetching` prop to state:
* Add an action to set and clear in `actions.ts` file
* Add a `fetching.ts` file in `reducers` subdirectory
* Add to `index.ts` in `reducers` subdirectory
* Call action creator to set before `Promise.all` and to clear in `then` method
* Use `fetching` prop as value of `disabled` prop in the `button` and `input` elements

## glamorous

Let’s watch [A Unified Styling Language](https://www.youtube.com/watch?v=X_uTCnaRe94) by Mark Dalgleish (29 minutes)

The goal of [glamorous](https://glamorous.rocks/) is maintainable CSS with React

### Create an application

1. Change to the your **working** directory in which you edit a copy of practice files

2. In Terminal: `create-react-app a-6-glamorous`

4. Change to the new **child** directory: `cd a-6-glamorous`

5. Install other dependencies:
    * `yarn add glamor glamorous prop-types`
    * `yarn add -D prettier`

6. Copy files **from** your clone of the class repository **to** the new application:

    * In the first Explorer or Finder window, copy all the files in the `src` subdirectory in the `a-6/glamorous` subdirectory, and then in the second Explorer or Finder window, paste the files in the `src` subdirectory in the new `a-6-glamorous` application (confirm that you are replacing some of the existing files)

    * In the second Explorer or Finder window, delete the `App.test.js` and `logo.svg` and `registerServiceWorker.js` files in the `src` subdirectory in the new `a-6-glamorous` application

    * In the first Explorer or Finder window, copy the `.prettierrc.json` files in the `a-6` directory, and then in the second Explorer or Finder window, paste the file in the new `a-6-glamorous` application (confirm that you are replacing the existing files)

7. Open the `a-6-glamorous` directory in your code editor

8. Open the `package.json` file, edit as follows, and then save your changes:

    * To format code, paste a property at the beginning of the `"scripts"` object: `"prettier": "prettier --write",`

    * To format code, edit a property at the beginning of the `"scripts"` object: `"start": "PORT=4000 react-scripts start",`

9. In a second Terminal window, start the development server: `yarn start` or `npm start`

10. After the application starts in a new tab of Chrome browser, to see “hot reloading” of changes, replace `React App` with `glamorous 6` in the `index.html` file in `public` subdirectory of the application, and then save your change

### Learning objective

* Convert from CSS rules to style object for glamorous elements rendered by React components.

### Example of glamorous element with style object

For example, look at the `a-6-glamorous/src/MarginContainer.js` file:

```js
/*
import React from 'react'

const MarginContainer = ({ children }) => <div className="margin">{children}</div>
*/

import glamorous from 'glamorous'

const MarginContainer = glamorous.div({
    margin: '1.5rem'
})

export default MarginContainer
```

The style properties come from the `.margin { … }` rule in the `a-6-glamorous/src/App.css` file:

```css
/*
.margin {
  margin: 1.5rem;
}
*/
```

### glamorous challenge

For each component `.js` file:
1. Replace any `className` prop with corresponding style (if a CSS property name contains hyphen, convert the name to camelCase in the style object :)
2. Comment out the rule in the `App.css` file to prove that the change works as intended

**Bonus**: Scan the Property Index at the end of [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/#property-index) standard
