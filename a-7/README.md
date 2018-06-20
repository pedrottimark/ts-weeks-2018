# React, part 3

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

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

import reducer from './reducers'
import App from './App'

ReactDOM.render((
  <Provider store={createStore(reducer)}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
), document.getElementById('root') as HTMLElement)
```

### route matching components

[`Route`](https://reacttraining.com/react-router/web/api/Route) compares `pathname` of the current `location` to its `path` prop, and then:

* if it matches, render content
* if it doesn’t match, render `null`

`Route` renders content by either of the following props:

* `component` prop refers to a component function or class, which receives [`match`](https://reacttraining.com/react-router/web/api/match), [`location`](https://reacttraining.com/react-router/web/api/location), [`history`](https://reacttraining.com/react-router/web/api/history) as its props

    ```js
    <Route path="/:id" component={Child} />
    ```

* `render` prop has an inline function closure if a component needs values of in-scope variables as props, or either of the following scenarios:

    ```js
    // convenient inline rendering without component function or class
    <Route path="/home" render={() => <div>Home</div>}/>
    ```

    ```js
    // wrapping/composing without the undesired remounting
    const FadingRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        <FadeIn>
          <Component {...props}/>
        </FadeIn>
      )}/>
    )
    ```

[`Switch`](https://reacttraining.com/react-router/web/api/Switch) renders only the first `Route` or `Redirect` that matches the current `location`

```js
<Switch>
  <Route exact path='/' component={Home}/>
  <Route path='/about' component={About}/>
  <Route path='/contact' component={Contact}/>
</Switch>
```

### navigation components

[`Link`](https://reacttraining.com/react-router/web/api/Link) component renders an `a` element

```js
<Link to='/courses?sort=name'>courses</Link>
```

[`NavLink`](https://reacttraining.com/react-router/web/api/NavLink) can style itself as `active` when its `to` prop matches the current `location`

```js
<nav>
  <ul>
    <li>
      <NavLink to="/">Home</Link>
    </li>
    <li>
      <NavLink to="/about">About</Link>
    </li>
    <li>
      <NavLink to="/topics">Topics</Link>
    </li>
  </ul>
</nav>
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

## Examples of React Router

For each of the following links, read code at the right, and then try demo at the left:

1. [Basic](https://reacttraining.com/react-router/web/example/basic)
2. [URL Parameters](https://reacttraining.com/react-router/web/example/url-params)
3. [Redirects](https://reacttraining.com/react-router/web/example/auth-workflow)
4. [Preventing Transitions](https://reacttraining.com/react-router/web/example/preventing-transitions)
5. [No Match 404](https://reacttraining.com/react-router/web/example/no-match)
6. [Sidebar](https://reacttraining.com/react-router/web/example/sidebar)
7. [Animated Transitions](https://reacttraining.com/react-router/web/example/animated-transitions)
8. [Ambiguous Matches](https://reacttraining.com/react-router/web/example/ambiguous-matches)
9. [Modal Gallery](https://reacttraining.com/react-router/web/example/modal-gallery)

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

### Examples of Redux Form

Each example is its own standalone web app with hot reloading.

1. Change to the your **working** directory in which you edit a copy of practice files
2. `git clone https://github.com/erikras/redux-form.git`
3. `cd redux-form`
4. Open the `redux-form` directory in your code editor
5. `cd examples`
6. For an individual example (for example, `simple` see below for recommendations)
    * `cd simple`
    * `yarn install` or `npm install`
    * `yarn start` or `npm start` and then open `localhost:3030` in a browser tab
7. When you have finished an example, stop the development server, and then `cd ..`

Recommended examples:

1. `simple`: how to attach standard inputs to Redux
2. `syncValidation`: how to add synchronous client-side validation
3. `fieldLevelValidation`: how to add field-level client-side validation
4. `submitValidation`: how to return server-side validation from your submit function
5. `asyncValidation`: how  to run asynchronous server-side validation when certain fields lose focus

## Redux Thunk

> When you call an asynchronous API, there are two crucial moments in time: the moment you start the call, and the moment when you receive an answer (or a timeout).

> Each of these two moments usually require a change in the application state; to do that, you need to dispatch normal actions that will be processed by reducers synchronously. Usually, for any API request you'll want to dispatch at least three different kinds of actions:

> An action informing the reducers that the request **began**. The reducers may handle this action by toggling an `isFetching` flag in the state. This way the UI knows it's time to show a spinner.

> An action informing the reducers that the request **finished successfully**. The reducers may handle this action by merging the new data into the state they manage and resetting `isFetching`. The UI would hide the spinner, and display the fetched data.

> An action informing the reducers that the **request failed**. The reducers may handle this action by resetting `isFetching`. Additionally, some reducers may want to store the error message so the UI can display it.

For more information, see [Async Actions](https://redux.js.org/advanced/async-actions)

> Without middleware, Redux store only supports synchronous data flow. This is what you get by default with `createStore()`

> You may enhance createStore() with `applyMiddleware()`. It is not required, but it lets you express asynchronous actions in a convenient way.

> Asynchronous middleware like [redux-thunk](https://github.com/gaearon/redux-thunk) or [redux-promise](https://github.com/acdlite/redux-promise) wraps the store's dispatch() method and allows you to dispatch something other than actions, for example, functions or Promises. Any middleware you use can then interpret anything you dispatch, and in turn, can pass actions to the next middleware in the chain. For example, a Promise middleware can intercept Promises and dispatch a pair of begin/end actions asynchronously in response to each Promise.

> When the last middleware in the chain dispatches an action, it has to be a plain object. This is when the [synchronous Redux data flow](https://redux.js.org/basics/data-flow) takes place.

Read [How to dispatch a Redux action with a timeout?](https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559)

> Redux Thunk teaches Redux to recognize special kinds of actions that are **functions**.

> You may find many examples in which thunks return Promises. This is not required but can be very convenient. Redux doesn’t care what you return from a thunk, but it gives you its return value from `dispatch()`.

## React Native

[React Native](https://facebook.github.io/react-native/) lets you compose a rich mobile user interface from declarative components.

```js
import * as React from 'react';
import { Text, View } from 'react-native';

class WhyReactNativeIsSoGreat extends React.Component {
  render() {
    return (
      <View>
        <Text>
          If you like React on the web, you’ll like React Native.
        </Text>
        <Text>
          You just use native components like 'View' and 'Text',
          instead of web components like 'div' and 'span'.
        </Text>
      </View>
    )
  }
}
```

> With React Native, you don't build a "mobile web app", an "HTML5 app", or a "hybrid app". You build a real mobile app that's indistinguishable from an app built using Objective-C or Java. React Native uses the same fundamental UI building blocks as regular iOS and Android apps. You just put those building blocks together using JavaScript and React.

### Files

* Generic code: `*.js` especially business logic and mid-level function components
* Specific code for iOS: `*.ios.js`
* Specific code for Android: `*.android.js`

### Style

Prefer to reuse styled **components** instead of reusing **styles**.

* style objects with camelCase keys
* flex and absolute positioning
* no inheritance

```js
const styles = Stylesheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bada55',
    },
    // and so on
})
```

For more information, *Learning React Native* by Bonnie Eisenman.
