/* tslint:disable no-var-requires */
require('isomorphic-fetch')

fetch(`http://localhost:${process.argv[2] || 3000}/items`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        completed: false,
        doerId: 'curly',
        text: 'Hey, fellas!'
    })
}).then(response => {
    if (!response.ok) {
        throw new Error(response.statusText)
    }

    return response.json()
}).then(item => {
    console.info(item)
}).catch(error => {
    console.error(error.message)
})
