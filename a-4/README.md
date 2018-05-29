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

1. In Command Prompt or Terminal, type `node src/01-http-get-200` and then press Enter or Return.
2. In a Web browser, open a new tab, and then type `localhost:3000/` in address bar, and then press Enter or Return to make a request.
3. Edit in address bar to add `unexpected` and then press Enter or Return to make a request.
4. In Command Prompt or Terminal, hold down Ctrl or Control key, and then press C.

Will 3 volunteers each do one of the following:

* Trace the code and explain the order of lines in the console.
* Suggest a problem with the response to the second request.
* Say what happens if you type in the input box, and then click Add.

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

1. In Command Prompt or Terminal, type `node src/02-http-get-404` and then press Enter or Return.
2. In a Web browser, type `localhost:3000/` in address bar, and then press Enter or Return to make a request. Will a volunteer please trace the code.
3. Edit in address bar to add `unexpected` and then press Enter or Return to make a request. Will a volunteer please trace the code.
4. In Command Prompt or Terminal, hold down Ctrl or Control key, and then press C.

To see a creative `404` response, visit in a Web browser: `https://egghead.io/unexpected`

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

1. In Command Prompt or Terminal, type `node src/03-http-get-500` and then press Enter or Return.
2. In a Web browser, type `localhost:3000/` in address bar, and then press Enter or Return to make a request. Will a volunteer please trace the code.
3. Edit in address bar to add `unexpected` and then press Enter or Return to make a request. Will a volunteer please trace the code.
4. In Command Prompt or Terminal, hold down Ctrl or Control key, and then press C.

A server keeps a private log of errors, but doesn’t include implementation details in the public response.

Of course, TSLint would find this error while you type code, before you run it!

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
            req.on('data', function (chunk) {
                console.info('Called function for data event')

                body += chunk;
            });
            req.on('end', function () {
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

1. In Command Prompt or Terminal, type `node 04-http-post` and then press Enter or Return.
2. In a Web browser, type `localhost:3000/` in address bar, and then press Enter or Return to make a request. Will a volunteer please trace the code.
3. Click in the `text of new item` box, type text, and then click the `Add item` button. Will a volunteer please trace the code.
4. Click in the `text of new item` box, type text, and then press Enter or Return. Will a volunteer please trace the code.
5. In Command Prompt or Terminal, hold down Ctrl or Control key, and then press C.

## Representational State Transfer (REST)

REST is a pattern to **describe** an application programming interface (API) also known as “endpoints” so client-side JavaScript code in a Web page can exchange data with a server:

* If the data is an array of objects, the URL consists of a **plural noun**, like `/items`
* If the data is an item in an array, the URL has an **index** or **id**, like `/items/1`
* If the data is an object, the URL consists of a **singular noun**, like `/view`

A more realistic REST API might include `users` as a plural noun and a string as id, like `/users/pedrottimark/items`

## Fetch

The global [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) function makes a request and returns the response as a promise (see next section).

* The default is a `GET` request:

    ```js
    fetch(url)
    ```

* Provide options to make a request with another method and (if needed) send a “payload” of data as JSON:

    ```js
    fetch(url, {
        method: 'DELETE',
    });
    ```

    ```js
    fetch(url, {
        method: method, // 'PUT', 'PATCH', 'POST'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    ```

## Promise chains in ES2015

A [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) is a placeholder for the result of an asynchronous operation.

The `fetch` function returns the response as a promise, so you can write each callback function as a separate argument in a **chain** of `then` and `catch` methods.
