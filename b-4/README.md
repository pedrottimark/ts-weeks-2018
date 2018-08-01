# Asynchronous JavaScript and module bundling

## Get the class files

In a Terminal window:

1. move to the `ts-weeks-2018` directory into which you cloned the repository
2. `rm -rf b-3/node_modules`
3. `git status`
4. Remove any other unwanted files or subdirectories, for example:
    * `b-3/yarn-error.log`
    * `b-3/npm-debug.log`
    * `.DS_Store`
5. `git add --all`
6. `git commit -m "My changes to files in week b-3"`
7. `git checkout master`
8. `git pull`
9. `git checkout -b b-4-changes` to make a branch for your changes
10. `cd b-4` for this lesson
11. `yarn` to install dependencies, if it is installed on your computer; otherwise see below

If the `yarn` command doesn’t work on your computer:

* type `npm install` instead of `yarn` to install dependencies in step 4
* type `npm run compile …` instead of `yarn compile …` whenever you **compile** a file below
* type `npm run lint …` instead of `yarn lint …` whenever you **check** a file below
* type `npm run prettier …` instead of `yarn prettier …` whenever you **format** a file below

In your code editor, open your copy of `b-4` subdirectory

## Hypertext Transfer Protocol (HTTP)

In [Hypertext Transfer Protocol](https://developer.mozilla.org/en-US/docs/Web/HTTP) (HTTP) a client makes a **request** to a server, and then the server sends a **response**.

A client provides a callback function whenever it makes a request, so it can “listen” for other events on the Web page while it waits for a response from the server.

[HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods), also known as verbs, include:

* `GET` requests a representation of the specified resource (for example, a web page)
* `PUT` replaces the specified resource with the request payload (for example, stringified JSON)
* `PATCH` modifies the specified resource with the request payload (for example, stringified JSON)
* `POST` submits data to the specified resource (for example, inputs from a form)
* `DELETE` deletes the specified resource (for example, an obsolete todo item)

Will a volunteer say the 4 verbs from the CRUD acronym.

Will another volunteer match the 5 HTTP verbs with the 4 CRUD verbs.

[HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) indicate whether a request succeeded or failed:

* `200` means **OK** the request succeeded. The message body of the response:

    * to `GET` contains a representation of the requested resource
    * to `PUT`, `PATCH`, or `POST` contains a resource which describes the result of the action

* `404` means the request failed because the resource is **Not Found**. In REST, the generic part of the “endpoint” might be valid, but the specific resource does not exist.

* `500` means the request failed because of an **Internal Server Error**.

Will any volunteers say any other status codes that you have seen.

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

Of course, TSLint can find this error while you type code, before you run it!

1. In your code editor, open the `src/03-http-get-500.ts` file and see 4 problems:
    * `[ts] Cannot find name 'require'`
    * `[tslint] require statement not part of an import statement (no-var-requires)`
    * `[ts] Cannot find name 'process'`
    * `[ts] Cannot find name 'renderPageX'. Did you mean 'renderPage'?`
2. Replace `renderPageX` with `renderPageX` and see the last problem disappear
3. Paste `/* tslint:disable no-var-requires */` on a new line above `const http = require('http')` and see the `[tslint]` problem disappear
4. To see the last problems disappear, do one of the following in Terminal:
    * `yarn add --exact --dev @types/node`
    * `npm install --save-exact --save-dev @types/node`

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

1. In your code editor, open the `src/04-http-post.js` file
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

For example: `db/db.json` for todo list application.

A URL might include two levels of plural nouns, like `/doers/curly/items`

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
The [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch) package adds fetch as a global so that its API is consistent between client and server (Node.js).

## Promise

A [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) is a placeholder for the result of an asynchronous operation.

The `fetch` function returns the response as a promise, so you can write each callback function as a separate argument in a **chain** of `then` and `catch` methods.

> Each call to `then()` or `catch()` actually creates and returns another promise, which is resolved when the previous promise is fulfilled or rejected.

> Always have a rejection handler at the end of a promise chain to ensure that you properly handle any error that may occur.

> The Promise returned from `fetch()` won’t reject on HTTP error status even if the response is an HTTP 404 or 500. Instead, it will resolve normally (with `ok` status set to false), and it will only reject on network failure or if anything prevented the request from completing.

## 05-fetch-post

1. In your code editor:
    * Open `src/05-fetch-post.ts` in one pane
    * Open `db/db.json` in another pane and scroll to the end of the file
2. If you use Code editor, split your Terminal pane:
    * In one Terminal: `yarn start` or `npm start`
    * In the other Terminal: `node src/05-fetch-post.ts`
3. See request in Terminal and see appended item at the end of the file

## 06-fetch-get

1. In your code editor, open `src/06-fetch-get.ts`
2. In Terminal: `node src/06-fetch-get.ts`
3. See request in one Terminal and item in other Terminal

## 07-fetch-put

1. In your code editor, open `src/07-fetch-put.ts`
2. In Terminal: `node src/07-fetch-put.ts`
3. See request in Terminal and see replaced item in the file

## 08-fetch-put

1. In your code editor, open `src/08-fetch-patch.ts`
2. In Terminal: `node src/08-fetch-patch.ts`
3. See request in Terminal and see updated item in the file

## 09-fetch-delete

1. In your code editor, open `src/09-fetch-delete.ts`
2. In Terminal: `node src/08-fetch-delete.ts`
3. See request succeeded in one Terminal and see absence of item in the file
4. In Terminal: `node src/08-fetch-delete.ts`
5. See request failed in Terminal

## 10-promise-all

The `Promise.all` method whose argument is an array of promises from `fetch` calls to two “endpoints” on the server for the Todo List application. It returns a promise which is fulfilled when **every** promise has been resolved.

1. In your code editor, open `src/10-promise-all.ts`
2. In Terminal: `node src/10-promise-all.ts`
3. See request in one Terminal and output in other Terminal



##

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

## fetch with your REST API

1. In the `db` subdirectory, create a `mydb.json` file which contains:
    * a property whose key is a singular noun whose value is an object
    * two properties whose keys are plural nouns whose values are array of objects
2. In the `package.json` file, add a `mystart` command to `scripts` to serve your database
3. From the `??-fetch-*.ts` files factor out the common function into a `00-convertToJSON.js` file which uses CommonJS `module.exports` to export it
4. Convert the `??-fetch-*.ts` and `10-promise-all.ts` files to `*a.js` files:
    * Use CommonJS to import the `convertToJSON` function from `./00-convertToJSON.js` file
    * To make requests to your data, change the nouns and ids

## Asynchronous functions in ES2017

To read the body of an asynchronous function with promises but without chains or callbacks:

* `async` is a keyword for the function definition
* `await` is for success instead of `then` method of promise
* `catch` block of `try` statement is for failure instead of `catch` method of promise
* asynchronous functions return a promise, regardless of what the return value is within the function

To convert your `*a.js` files from ECMAScript 2015 `Promise` to `*b.js` with ECMAScript 2017 `async-await` read one of more of the following resources:

* [async & await](https://davidwalsh.name/async-await) by David Walsh
* [Async functions](http://exploringjs.com/es2016-es2017/ch_async-functions.html) by Dr. Axel Rauschmayer
* [Exception handling in async functions](https://brunoscopelliti.com/exception-handling-in-async-functions/) by Bruno Scopelliti

## Module bundling with webpack

Webpack builds a dependency graph [from top down] that includes every module your application needs, then packages all of those modules into one or more bundles.

As a contrast, both `grunt` or `gulp` process files by type [from bottom up].

Node.js “understands” CommonJS modules, but Web browsers do not. This is one of the many problems that **webpack** solves: convert from CommonJS to ordinary JavaScript.

Let’s watch [Webpack from First Principles](https://youtu.be/WQue1AN93YU) by Glen Maddern (14 minutes)

**Bonus**: Read about loaders:
* [ts-loader](https://www.npmjs.com/package/ts-loader) compiles TypeScript when webpack loads a `.ts` file
* [file-loader](https://www.npmjs.com/package/file-loader) instructs webpack to emit the required object as file and to return its public URL. By default the filename of the resulting file is the MD5 hash of the file's contents with the original extension of the required resource.
* [url-loader](https://www.npmjs.com/package/url-loader) works like the file-loader, but can return a `base64` encoded DataURL if the file is smaller than a byte limit
* [style-loader](https://www.npmjs.com/package/style-loader) adds CSS to the DOM by injecting a `style` element
* [css-loader](https://www.npmjs.com/package/css-loader) interprets `@import` and `url()` like `require` and will resolve them.

## localstorage

Convert `fetch` calls for your data to `local.js` file with [`localstorage`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage) calls:
* `setItem`
* `getItem`
* `removeItem`

To run the code in a browser, you will need a corresponding `local.html` file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset='utf-8'/>
<title>localstorage</title>
</head>
<body>
<div id="root"></div>
<script src="local.js"></script>
</body>
</html>
```
