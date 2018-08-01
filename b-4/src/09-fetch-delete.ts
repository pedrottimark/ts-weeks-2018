/* tslint:disable no-var-requires */
require('isomorphic-fetch')

fetch(`http://localhost:${process.argv[2] || 3000}/items/${7}`, {
    method: 'DELETE',
}).then(response => {
    if (!response.ok) {
        throw new Error(response.statusText)
    }
}).catch(error => {
    console.error(error.message)
})
