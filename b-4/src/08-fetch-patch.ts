/* tslint:disable no-var-requires */
require('isomorphic-fetch')

fetch(`http://localhost:${process.argv[2] || 3000}/items/${7}`, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        completed: true
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
