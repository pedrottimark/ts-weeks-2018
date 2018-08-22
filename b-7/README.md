# React, part 3

## Get the class files

In a Terminal window:

1. Move to the `ts-weeks-2018` directory into which you cloned the repository

2. `git status`

3. If there are any unwanted files, remove them

4. Only if there are any changes:

    * `git add --all`
    * `git commit -m "My changes to files in week b-6"`

5. Only if you are not already on master branch: `git checkout master`

6. `git pull`

7. Only if you didn’t ever do:

    * In Terminal: `npm install --global create-react-app`
    * Go to [https://reactjs.org/community/debugging-tools.html](https://reactjs.org/community/debugging-tools.html) and then follow the link to install React Developer Tools extension for Chrome browser

## Create an application for React Router and Redux Form

1. Change to a **working** directory in which you can create new React applications

2. In Terminal: `create-react-app --scripts-version=react-scripts-ts b-7-router-form`

3. Change to the new **child** directory: `cd b-7-router-form`

4. Install other dependencies:

    * If `yarn` is installed on your computer: `yarn add --exact react-document-title react-router-dom react-redux redux redux-form`
    * Otherwise: `npm install --save-exact react-document-title react-router-dom react-redux redux redux-form`

5. Install other devDependencies:

    * If `yarn` is installed on your computer: `yarn add --dev --exact json-server prettier @types/react-document-title @types/react-router-dom @types/react-redux @types/redux-form`
    * Otherwise: `npm install --save-dev --save-exact json-server prettier @types/react-document-title @types/react-router-dom @types/react-redux @types/redux-form`

6. Copy files **from** your clone of the class repository **to** the new application:

    * In an Explorer or Finder window, copy the `db` subdirectory of the `b-7` subdirectory, and then in another Explorer or Finder window, paste the `db` subdirectory in the new `b-7` application directory

    * In the first Explorer or Finder window, copy all the files in the `src` subdirectory in the `b-7` subdirectory, and then in the second Explorer or Finder window, paste the files in the `src` subdirectory in the new `b-7-router-form` application (confirm that you are replacing existing files)

    * In the second Explorer or Finder window that displays the new `b-7-router-form` application, delete the `src/App.test.tsx`, `src/logo.svg`, and `src/registerServiceWorker.ts` files

    * In the first Explorer or Finder window, copy the `.prettierrc.json` and `tslint.json` files in the `b-7` directory (to see the `.prettierrc.json` file, you might need to hold down Command and Shift keys and press period) and then in the second Explorer or Finder window, paste the file in the new `b-7-router-form` application (confirm that you are replacing existing files)

7. Open the `b-7-router-form` directory in your code editor

8. Open the `package.json` file, edit as follows, and then save your changes:

    * To format code, paste a property at the beginning of the `"scripts"` object: `"prettier": "prettier --write",`

    * To start a data server, paste a property at the beginning of the `"scripts"` object: `"server": "json-server --port 3001 --delay 2000 --watch ./db/db.json --routes ./db/routes.json",`

    * For the development server to pass requests to and responses from the data server, paste a property: **above** the `"scripts"` object: `"proxy": "http://localhost:3001",`

9. In the first Terminal window, start the data server: `yarn server` or `npm run server`

10. In a second Terminal window, start the development server: `yarn start` or `npm start`

11. After the application starts in a new tab of Chrome browser:

    * open the `Console` pane
    * to see “hot reloading” of changes, replace `React App` with `Healthy Eating` in the `public/index.html` file, and then save your change

## How to run prettier

If there are style problems when you edit a `src/Whatever.tsx` file, save your changes, and then do one of the following in Terminal:

* `yarn prettier src/Whatever.tsx`
* `npm run prettier src/Whatever.tsx`

Or you can reformat all source files with wildcards: `src/*.ts src/*.tsx`

## Overview of application

Inspired by information from [The Nutrition Source](https://www.hsph.harvard.edu/nutritionsource/) at Harvard T.H. Chan School of Public Health, supplemented by details about vitamins and minerals from the following books:

* *The Everything Guide to Nutrition* by Nicole Cormier (pages 113-128)
* *Complete Family Nutrition* by Jane Clarke (pages 28-35)
* *The Daniel Plan* by Rick Warren, Daniel Amen, Mark Hyman (pages 79-83)

The header displays:

* 6 tabs to display tables of foods by category
* button to display information about randomly selected vitamin or mineral

Routes:

* `/` home page displays the [Healthy Eating Plate](https://www.hsph.harvard.edu/nutritionsource/healthy-eating-plate/)
* `/categories/vegetables` and so on, display table of foods with links to vitamins and minerals
* `/vitamins` displays table of vitamins (and later, form to add new vitamin information)
* `/vitamins/A` and so on, display information about a vitamin
* `/minerals` displays table of minerals (and later, form to add new mineral information)
* `/minerals/Ca` and so on, display information about a mineral

The application also displays:

* `not_found_404.svg` image for unexpected routes
* `spinning_plate.svg` while it is waiting for responses to fetch requests
* `broken_plate.svg` if any fetch requests fail or if it catches errors in section components

The only reason for the application to have so little interaction is to emphasize practice for React Router and Redux Form.

## React Router

[React Router](https://reacttraining.com/react-router/) is a collection of navigation components that **compose declaratively** with application-specific components.

Think about routing as **user interface**, not as static configuration. For example, the set of routes might change to provide dynamic user experience when people rotate mobile devices.

* In **web** applications, import components from the `react-router-dom`
* In **React Native** applications, import components from the `react-router-native`

React Router provides three types of [components](https://reacttraining.com/react-router/web/guides/basic-components):

### router components

[`BrowserRouter`](https://reacttraining.com/react-router/web/api/BrowserRouter) uses HTML5 [`history`](https://developer.mozilla.org/en-US/docs/Web/API/History) to keep user interface and URL in sync.

If an application also uses Redux, then `BrowserRouter` is child of `Provider` and parent of `App` component. React Router and Redux both use React [context](https://reactjs.org/docs/context.html) to pass data through the component tree without having to pass props down manually at every level.

```js
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { reducer as form } from 'redux-form'

import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './index.css'

const reducer = combineReducers({ form })
const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
)
```

### route matching components

[`Route`](https://reacttraining.com/react-router/web/api/Route) compares `pathname` of the current `location` to its `path` prop, and then:

* if it matches, render content
* if it doesn’t match, render `null`

`Route` renders content by either of the following props:

* `component` prop refers to a component function or class, which receives [`match`](https://reacttraining.com/react-router/web/api/match), [`location`](https://reacttraining.com/react-router/web/api/location), [`history`](https://reacttraining.com/react-router/web/api/history) as its props

    ```js
    <Route path="/customers/:id" component={Customer} />
    ```

* `render` prop has an inline function closure if a component needs values of in-scope variables as props:

    ```js
    <Route path="/" exact render={() => <MainHome isWaiting={isWaiting} hasError={hasError} />} />
    ```

[`Switch`](https://reacttraining.com/react-router/web/api/Switch) renders only the first `Route` or `Redirect` that matches the current `location`

```js
<Switch>
  <Route path='/' exact component={Home} />
  <Route path='/about' component={About} />
  <Route path='/contact' component={Contact} />
</Switch>
```

### navigation components

[`Link`](https://reacttraining.com/react-router/web/api/Link) component renders an `a` element

```js
<p>
    All <Link to="/vitamins">vitamins</Link>
</p>
```

[`NavLink`](https://reacttraining.com/react-router/web/api/NavLink) can style itself as `active` when its `to` prop matches the current `location`

```js
<header>
    <h1>
        <NavLink to="/">
            Healthy Eating
        </NavLink>
    </h1>
    <nav>
        {categories.map(category => (
            <NavLink key={category} to={`/categories/${category}`} className={category}>
                {category}
            </NavLink>
        ))}
    </nav>
</header>
```

To force navigation, render [`Redirect`](https://reacttraining.com/react-router/web/api/Redirect) with a `to` prop

```js
<Redirect
  to={{
    pathname: "/login",
    state: { from: props.location }
  }}
/>
```

## Practice for React Router

1. In the `src/Header.tsx` file:

    * Click a tab to see the route change but style for active tab isn’t quite right
    * Add `import` state for `NavLink` named export from `react-router-dom` package
    * Replace `a` elements with `NavLink`
    * Replace `href` properties with `to` props
    * Save your changes, and then click a tab to see style for active tab is better

2. To see example of `history.push` method:

    * In the `src/Header.tsx` file, delete `/*` and `*/` comments
    * In the `src/App.tsx` file, replace `<Header />` with `<Header minerals={minerals} vitamins={vitamins} />`
    * Save your changes, and then click the `I’m Feeling Healthy` button at the right of the tabs
    * Will a volunteer explain the `src/HealthyButton.tsx` file

3. To see an example of an unexpected route:

    * Click the `minerals` or `vitamins` link
    * In the `Switch.tsx` file delete the `/*` and `*/` and `{/*` and `*/}` comments
    * Save your changes, and then refresh the web page
    * Will a volunteer explain `Switch` and `Route` elements

4. In the `src/MineralsSection.tsx` and `src/VitaminsSection` files:

    * Replace `a` element with `Link`
    * Replace `href` property with `to` prop

5. To see an example of an error:

    * In the `src/fetch.ts` file, replace `/api/vitamins` with `/api/vitaminx`
    * Save your change, and then refresh the web page
    * In the address bar of the browser, edit the URL to an unexpected path, and then refresh
    * Right-click the back button of the browser, and then click the `Healthy Eater` page
    * In the `src/fetch.ts` file, replace `/api/vitaminx` with `/api/vitamins`

## Redux Form

Let’s watch [A practical guide to Redux Form](https://www.youtube.com/watch?v=ey7H8h4ERHg) by Erik Rasmussen (about 40 minutes)
* Please ignore his remark about “dumb monkies”
* His overview or React data flow includes the concept of [lifting state up](https://reactjs.org/docs/lifting-state-up.html) to form component
* At the interruption about 9 minutes, skip ahead to 11:11
* Pay special attention to demo how to add Field components
* Stop at 41:00

### form reducer

The **reducer** function updates the `form` property of state whenever the Redux store receives a form action (for example, `onChange` from an `input` element rendered by a `Field` component, see below).

By the way, why does `import` statement rename as different key than expected in `combineReducers` argument?

```js
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const reducer = combineReducers({
  form: formReducer,
  // other reducers
})
```

Instead, rename once, and then use object property shortcut in `combineReducers` argument!

```js
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

const reducer = combineReducers({
  form,
  // other reducers
})
```

### reduxForm function

The `reduxForm` function connects a form component. It provides props about form state and a function to handle the submit process. It is similar to the `connect` function from `react-redux` package.

Given configuration object as argument, it returns a function, which given a form component as argument, returns a higher-order component that becomes the default export of the file.

```js
import { reduxForm } from 'redux-form'

const MyForm = ({ handleSubmit, /* and so on */ }) => <form onSubmit={handleSubmit}>…</form>

export default reduxForm({ form: 'myFormName', /* and so on */ })(MyForm)
```

If the `reduxForm(…)(…)` syntax seems confusing, you can always break it down into two steps:

```js
// return a configured function
const connectMyForm = reduxForm({ form: 'myFormName', /* and so on */ })

// call the configured function which given component, returns connected component
const ConnectedForm = connectMyForm(MyForm)

export default ConnectedForm
```

The value of `form` configuration property is the key of the state of this form within the `form` property. That is how one form reducer function serves all connected form components.

### Field component

`Field` component connects an individual input element (within a connected form component) connects each input to the Redux store.

* `name` prop is required
* `component` prop is required: a class component, a function component, or a string name of `input`, `textarea`, or `select` input elements
* all other props will be passed along to the element generated by the component prop
* it provides additional props including `value` and `onChange`

```js
import { Field } from 'redux-form'

const myForm = (props) => (
    <form>
        <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
        />
    </form>
)
```

### FAQ for Redux Form

Read the answers to the first 5 of [Frequently Asked Questions](https://redux-form.com/7.4.2/docs/faq/)

## Practice for Redux Form

Apply information on [Redux Form](https://redux-form.com/7.4.2/docs/gettingstarted.md/) site to the following forms:

* `src/MineralForm.tsx`
* `src/VitaminForm.tsx`

To display the forms, delete a pair of `/*` and `*/` and a pair of `{/*` and `*/}` in:

* `src/MineralsSection.tsx`
* `src/VitaminsSection.tsx`

Synchronous validation:

* mineral `id` must consist of uppercase letter followed by optional lowercase letter
* vitamin `id` must consist of uppercase letter followed by optional digits
* mineral `name` must consists of lowercase letters
* vitamin `name` must not be empty

Asynchronous validation on submit:

* `id` doesn’t already exist
* split example foods into array of foods and they must exist

Form submission: post a new mineral or vitamin
