'use strict'

const http = require('http')

// Initialize state of application.
let items = [
    {completed: true, text: 'Did that'},
    {completed: false, text: 'Do this'},
]

// Given previous array and text string,
// return next array which has at end a new todo item with text.
const addItem = (items, text) => [...items, {completed: false, text}]

const getClass = completed => completed ? 'completed' : 'uncompleted'
const getText = text => text.replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Given todo item as object, return markup as string.
const renderItem = item => `<li class="${getClass(item.completed)}">${getText(item.text)}</li>`

// Given todo items as array, return markup as string.
const renderPage = items => [
    '<!DOCTYPE html>',
    '<html lang="en">',
    '<head><meta charset="utf-8"/><title>04-http-post</title></head>',
    '<body>',
    `<ul>${items.map(renderItem).join('')}</ul>`,
    '<form action="/" method="post">',
    '<input type="text" name="textOfNewItem" placeholder="text of new item">',
    '<button type="submit">Add</button>',
    '</form>',
    '</body>',
    '</html>',
].join('')

// Given URL-encoded string, return minimally decoded string.
const decode = string => string.replace(/\+/g, ' ').replace(/%2B/g, '+')

const port = parseInt(process.argv[2], 10) || 3000 // can give on command line

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

console.info(`Created HTTP server to listen on port: ${port}`)
