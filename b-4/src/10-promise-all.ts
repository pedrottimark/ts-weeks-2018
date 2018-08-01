/* tslint:disable no-var-requires */
require('isomorphic-fetch')

const convertToJSON = response => {
  if (!response.ok) {
      throw new Error(response.statusText)
  }

  return response.json()
}

Promise.all([
  fetch(`http://localhost:${process.argv[2] || 3000}/doers/curly`).then(convertToJSON),
  fetch(`http://localhost:${process.argv[2] || 3000}/doers/curly/items`).then(convertToJSON)
]).then().then(([doer, items]) => {
  console.info(doer)
  console.info(items)
}).catch(error => {
  console.error(error.message)
})
