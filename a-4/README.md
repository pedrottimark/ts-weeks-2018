# Asynchronous JavaScript and module bundling

## Get the class files

In a Terminal window:

1. move to the `ts-weeks-2018` directory into which you cloned the repository
2. `git pull`
3. remember the location of your working directory in which you edit a copy of practice files
4. `cp -R a-4 path-to-your-working-directory`
5. `cd path-to-your-working-directory/a-4`
6. `yarn`

If the `yarn` command doesn’t work on your computer:

* type `npm install` instead of `yarn` to install dependencies in step 4
* type `npm test …` instead of `yarn test …` whenever you run a test below

In your code editor, open your copy of `a-4` subdirectory in working directory

## Hypertext Transfer Protocol (HTTP)

In [Hypertext Transfer Protocol](https://developer.mozilla.org/en-US/docs/Web/HTTP) (HTTP) a client makes a **request** to a server, and then the server sends a **response**.

A client provides a callback function whenever it makes a request, so it can “listen” for other events on the Web page while it waits for a response from the server.

[HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods), also known as verbs, include:

* `GET` requests a representation of the specified resource (for example, a web page)
* `PUT` replaces the specified resource with the request payload (for example, stringified JSON)
* `PATCH` modifies the specified resource with the request payload (for example, stringified JSON)
* `POST` submits data to the specified resource (for example, inputs from a form)
* `DELETE` deletes the specified resource (for example, an obsolete todo item)

[HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) indicate whether a request succeeded or failed:

* `200` means **OK** the request succeeded. The message body of the response:

    * to `GET` contains a representation of the requested resource
    * to `PUT`, `PATCH`, or `POST` contains a resource which describes the result of the action

* `404` means the request failed because the resource is **Not Found**. In REST, the generic part of the “endpoint” might be valid, but the specific resource does not exist.

* `500` means the request failed because of an **Internal Server Error**.

## HTTP module in Node.js

```js
const http = require('http');
```

**Bonus**: [Node.js Docs http](https://nodejs.org/dist/latest-v10.x/docs/api/http.html#http_http)

### 01-http-get-200

The `createServer` method is a virtual constructor which returns a server instance.

Its argument is a function which the server calls whenever it receives a request:

The `req` object has properties to interpret a **request**, including `method` and `url`

The `res` object has properties to build a **response**, including:

* `writeHead` provides a status code and [headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
* `end` appends (the rest of) the body and completes the response

In a concise chain like jQuery, call a method of the server instance to “listen” for requests on a specific port (for example, 80 is for requests on the World Wide Web).

```js
const port = parseInt(process.argv[2], 10) || 3000 // can give on command line

http.createServer((req, res) => {
    console.log(req.method, req.url)

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(renderPage())
}).listen(port)

console.info(`Created HTTP server to listen on port: ${port}`)
```

1. In your code editor, open the `src/01-http-get-200.js` file
2. In Terminal: `node src/01-http-get-200`
3. In a Web browser, open a new tab, and then type `localhost:3000/` in address bar, and then press Enter or Return to make a request
4. Edit in address bar to add `unexpected` and then press Enter or Return to make a request
5. In Terminal: hold down Ctrl or Control key, and then press C.

Will 3 volunteers each do one of the following:

* Trace the code and explain the order of lines in the console.
* Suggest a problem with the response to the second request.
* Say what happens if you type in the input box, and then click Add.

**Bonus**: [Node.js Docs http.ServerResponse](https://nodejs.org/dist/latest-v10.x/docs/api/http.html#http_class_http_serverresponse)

### 02-http-get-404

The response depends on the `url` property of the `req` object.

```js
http.createServer((req, res) => {
    console.log(req.method, req.url)

    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(renderPage())
    } else {
        res.writeHead(404)
        res.end(`Not Found: ${req.url}`)
    }
}).listen(port)
```

1. In your code editor, open the `src/02-http-get-404.js` file
2. In Terminal: `node src/02-http-get-404`
3. In a Web browser, type `localhost:3000/` in address bar, and then press Enter or Return to make a request
4. Will a volunteer please trace the code
5. Edit in address bar to add `unexpected` and then press Enter or Return to make a request
6. Will a volunteer please trace the code
7. In Terminal: hold down Ctrl or Control key, and then press C

**Bonus**: To see a creative `404` response, visit in a Web browser: `https://egghead.io/unexpected`

### 03-http-get-500

Server developers think of `404` as an **external** error, whether someone mistypes in the address bar or a page on the site has an incorrect link.

Write code in a `try` statement with a `catch` block so the server keeps running after an **internal** error.

```js
http.createServer((req, res) => {
    console.log(req.method, req.url)

    try {
        if (req.url === '/' && req.method === 'GET') {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(renderPageX()) // intentional mispelling to throw an error
        } else {
            res.writeHead(404)
            res.end(`Not Found: ${req.url}`)
        }
    } catch (error) {
      console.error(error.message)

      res.writeHead(500)
      res.end('Server Error')
    }
}).listen(port)
```

1. In your code editor, open the `src/03-http-get-500.js` file
2. In Terminal: `node src/03-http-get-500`
3. In a Web browser, type `localhost:3000/` in address bar, and then press Enter or Return to make a request
4. Will a volunteer please trace the code
5. Edit in address bar to add `unexpected` and then press Enter or Return to make a request
6. Will a volunteer please trace the code
7. In Terminal: hold down Ctrl or Control key, and then press C

A server keeps a private log of errors, but doesn’t include implementation details in the public response.

Of course, TSLint would find this error while you type code, before you run it!

**Bonus**: [try...catch statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

### 04-http-post

A `POST` request has a **stream** with `data` and `end` events, so that the Web server can respond to other requests if the body consists of much text (for example, from a `textarea` element).

```js
http.createServer((req, res) => {
    console.log(req.method, req.url)
    let body = ''

    try {
        if (req.url === '/' && req.method === 'GET') {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(renderPage(items))
        } else if (req.url === '/' && req.method === 'POST') {
            req.on('data', (chunk) => {
                console.info('Called function for data event')

                body += chunk;
            });
            req.on('end', () => {
                console.info('Called function for end event')
                console.info(`Posted:\n${body}`)

                items = addItem(items, decode(body.replace('textOfNewItem=', '')))
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.end(renderPage(items)) // display page with new todo item
            })

            console.info('Added callback functions for data and end events')
        } else { … }
    } catch (error) { … }
}).listen(port)
```

1. In your code editor, open the `src/03-http-post.js` file
2. In Terminal: `node 04-http-post`
3. In a Web browser, type `localhost:3000/` in address bar, and then press Enter or Return to make a request
4. Will a volunteer please trace the code
5. Click in the `text of new item` box, type text, and then click the `Add` button
6. Will a volunteer please trace the code
7. Click in the `text of new item` box, type text
8. Will a volunteer please trace the code
9. In Terminal: hold down Ctrl or Control key, and then press C

**Bonus**: [Node.js Docs http.ClientRequest](https://nodejs.org/dist/latest-v10.x/docs/api/http.html#http_class_http_clientrequest)

## Representational State Transfer (REST)

REST is a pattern to **describe** an application programming interface (API) also known as “endpoints” so client-side JavaScript code in a Web page can exchange data with a server:

* If the data is an array of objects, the URL consists of a **plural noun**, like `/items`
* If the data is an item in an array, the URL has an **index** or **id**, like `/items/1`
* If the data is an object, the URL consists of a **singular noun**, like `/view`

First example: `db/05-db.json` for interface to check out fruits and vegetables at the grocery store.

A URL might include two levels of plural nouns, like `/doers/larry/items`

Second example: `db/06-db.json` for todo list application.

Will a volunteer explain how the doers and their items are related. What is a name for this principle?

**Bonus**: [json-server: Get a full fake REST API with zero coding in less than 30 seconds](https://github.com/typicode/json-server)

## Fetch

The [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) function provides a generic definition of Request and Response objects. It returns a Promise that resolves to the Response to that request, whether it is successful or not.

It is a built-in global in browsers, but you need to install a package to call it in Node.js.

* The default is a `GET` request:

    ```js
    fetch(url)
    ```

* Provide options to make a request with another method and (if needed) send a “payload” of data as JSON:

    ```js
    fetch(url, {
        method: 'DELETE'
    });
    ```

    ```js
    fetch(url, {
        method: method, // 'PUT', 'PATCH', 'POST'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    ```

## Promise, part 1

A [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) is a placeholder for the result of an asynchronous operation.

The `fetch` function returns the response as a promise, so you can write each callback function as a separate argument in a **chain** of `then` and `catch` methods.

> Each call to `then()` or `catch()` actually creates and returns another promise, which is resolved when the previous promise is fulfilled or rejected.

In the `src/05-index.ts` file, the `onSubmitCode` callback function calls `fetch` get an item.

Will a volunteer say where promises are returned on the happy path.

```js
fetch(`/items/${id}`)
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw response.statusText
        }
    })
    .then(item => {
        if (!item.count) {
            inputCode.value = ''
            state = { ...stateDefault }
            tbody.appendChild(renderRow(item.description, item.id))
        }
        state.item = item
        update(state)
    })
    .catch(error => {
        state.isFetchingItem = false
        if (typeof error === 'string') {
            inputCode.value = ''
            state.item.id = 0
            state.item.description = `${id} ${error}` // especially Not Found
        } else {
            state.item.description = `Not Connected`
        }
        update(state)
    })
```

> Always have a rejection handler at the end of a promise chain to ensure that you properly handle any error that may occur.

Will a volunteer explain how the `catch` callback function distinguishes HTTP error from Promise rejection.

> The Promise returned from `fetch()` won’t reject on HTTP error status even if the response is an HTTP 404 or 500. Instead, it will resolve normally (with `ok` status set to false), and it will only reject on network failure or if anything prevented the request from completing.

1. In Terminal: `yarn compile src/05-index.ts`
2. In your code editor, open:
    * the `src/05-index.ts` file
    * the `lib/05-index.html` file
    * the `lib/05-index.css` file
    * the `db/05-db.json` file
3. Will a volunteer suggest a meaning of the boolean value of the `count` property
4. In another Terminal: `yarn start ./db/05-db.json --delay 2000`
5. In your Web browser, paste `http://localhost:3000/05-index.html` into the address bar
6. In the box, type code for item which has `false` count, and then click the `GET` button
7. Will a volunteer say when the `GET` button becomes enabled
8. In the `src/05-index.ts` file, finish the `renderRow` function, and then in Terminal: `yarn compile src/05-index.ts`
9. In your Web browser, refresh the tab, and then repeat step 6
10. In the box, type code for item which has `true` count, click the `GET` button, type the quantity, and then click the `OK` button or press the `return` key
11. Try out some more scenarios (especially to see if you can find edge cases :)
12. In Terminal, press control-c to stop the server when you have finished

**Bonus**: Read [Promises and Asynchronous Programming](https://leanpub.com/understandinges6/read#leanpub-auto-promises-and-asynchronous-programming) by Nicholas C. Zakas

## Promise, part 2

Unlike the previous example, which didn’t type check responses and did handle latency, this example does type check responses and doesn’t handle latency :)

The `Promise.all` method whose argument is an array of promises from `fetch` calls to two “endpoints” on the server for the Todo List application. It returns a promise which is fulfilled when **every** promise has been resolved.

```js
// When promise resolves, update heading and ul.
Promise.all([getDoer(state.doerId), getItems(state.doerId)])
    .then(([doer, items]) => {
        state.doerName = doer.name
        state.items = items
        h1.innerText = `Todo List for ${state.doerName}`
        state.items.forEach(item => {
            ul.appendChild(renderItem({ item, onDeleteItem, onToggleCompleted }))
        })
    })
    .catch(error => console.error(error.message))
```

1. In Terminal: `yarn compile src/06-*.ts`
2. In your code editor, open:
    * the `src/06-fetch.ts` file
    * the `lib/06-renderApp` file
    * the `lib/05-renderItem` file
    * the `lib/05-renderAdder` file
    * the `db/06-db.json` file
4. In another Terminal: `yarn start ./db/06-db.json`
5. In your Web browser, paste `http://localhost:3000/06-index.html` into the address bar
6. See changes to the `db/06-db.json` file after you do any of the following:
    * Click an item to toggle whether it is completed (gray) or uncompleted (green)
    * Click `Delete`
    * Type in the box, and then click `Add`

## Module bundling with webpack

Webpack builds a dependency graph [from top down] that includes every module your application needs, then packages all of those modules into one or more bundles.

As a contrast, both `grunt` or `gulp` process files by type [from bottom up].

Node.js “understands” CommonJS modules, but Web browsers do not. This is one of the many problems that **webpack** solves: convert from CommonJS to ordinary JavaScript.

Let’s watch [Webpack from First Principles](https://youtu.be/WQue1AN93YU) by Glen Maddern (14 minutes)

1. In your code editor, open the `07-webpack.config.js` file
2. In Terminal: `yarn webpack --config ./07-webpack.config.js`
3. In your Web browser, paste `http://localhost:3000/07-index.html` into the address bar
4. See changes to the `db/06-db.json` file after you do any of the following:
    * Click an item to toggle whether it is completed (gray) or uncompleted (green)
    * Click `Delete`
    * Type in the box, and then click `Add`

**Bonus**: Read about loaders:
* [ts-loader](https://www.npmjs.com/package/ts-loader) compiles TypeScript when webpack loads a `.ts` file
* [file-loader](https://www.npmjs.com/package/file-loader) instructs webpack to emit the required object as file and to return its public URL. By default the filename of the resulting file is the MD5 hash of the file's contents with the original extension of the required resource.
* [url-loader](https://www.npmjs.com/package/url-loader) works like the file-loader, but can return a `base64` encoded DataURL if the file is smaller than a byte limit
* [style-loader](https://www.npmjs.com/package/style-loader) adds CSS to the DOM by injecting a `style` element
* [css-loader](https://www.npmjs.com/package/css-loader) interprets `@import` and `url()` like `require` and will resolve them.

## Style and image bundling with webpack

1. In your code editor, open:
    * the `08-webpack.config.js` file
    * the `src/08-renderApp.ts` file
2. In Terminal: `yarn webpack --config ./08-webpack.config.js`
3. In your Web browser, paste `http://localhost:3000/08-index.html` into the address bar
4. See changes to the `db/06-db.json` file after you do any of the following:
    * Click an item to toggle whether it is completed (gray) or uncompleted (green)
    * Click `Delete`
    * Type in the box, and then click `Add`

## Asynchronous functions in ES2017

To read the body of an asynchronous function with promises but without chains or callbacks:

* `async` is a keyword for the function definition
* `await` is for success instead of `then` method of promise
* `catch` block of `try` statement is for failure instead of `catch` method of promise
* asynchronous functions return a promise, regardless of what the return value is within the function


Read [async & await](https://davidwalsh.name/async-await) and compare the example in Converting Promise Handling to `await` to the following code:

```js
// ES2015 in 07-renderApp.ts
const onToggleCompleted = (id: number) => {
    const index = state.items.findIndex(item => item.id === id)
    const completed = !state.items[index].completed
    patchItem(id, {completed})
        .then(() => {
            const item = state.items[index]
            item.completed = completed
            const li = renderItem({ item, onDeleteItem, onToggleCompleted })
            ul.replaceChild(li, ul.children[index])
        })
        .catch(error => {
            console.error(error.message)
        })
}
```

If you add `async` keyword before asynchronous function with promises, then you can replace promise chains with `await` and move the following code inline instead of callback.

```js
// ES2017 with async and await in 09-renderApp.ts
const onToggleCompleted = async (id: number) => {
    const index = state.items.findIndex(item => item.id === id)
    const completed = !state.items[index].completed
    try {
        // We would assign `let response = await …` if it is used.
        await patchItem(id, {completed})

        const item = state.items[index]
        item.completed = completed
        const li = renderItem({ item, onDeleteItem, onToggleCompleted })
        ul.replaceChild(li, ul.children[index])
    } catch (error) {
        console.error(error.message)
    }
}
```

1. In your code editor, open the `src/09-fetch.ts` file, and use `async` and `await` in functions which have `then` method:
    * `getDoer`
    * `getItems`
    * `postItem`
2. In Terminal: `yarn webpack --config ./09-webpack.config.js`
3. In your Web browser, paste `http://localhost:3000/09-index.html` into the address bar
4. See changes to the `db/06-db.json` file after you do any of the following:
    * Click an item to toggle whether it is completed (gray) or uncompleted (green)
    * Click `Delete`
    * Type in the box, and then click `Add`
