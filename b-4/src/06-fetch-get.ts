/* tslint:disable no-var-requires */
require('isomorphic-fetch')

fetch(`http://localhost:${process.argv[2] || 3000}/doers/curly/items`).then(response => {
  if (!response.ok) {
      throw new Error(response.statusText)
  }

  return response.json()
}).then(items => {
  console.info(items)
}).catch(error => {
  console.error(error.message)
})
