import numerizer from './10-ecmascript-export.js'

const thing = numerizer({
    singular: 'thing',
    suffix: 's'
})
const sheep = numerizer({
    singular: 'sheep',
    suffix: ''
})
const ox = numerizer({
    singular: 'ox',
    suffix: 'en'
})
const inch = numerizer({
    singular: 'inch',
    suffix: 'es'
})
const geese = numerizer({
    singular: 'goose',
    plural: 'geese'
})

// Given string, return li element which has that string as child text node.
const createItem = string => {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(string))
    return li
}

const ul = document.createElement('ul')
ul.appendChild(createItem(thing(0)))
ul.appendChild(createItem(thing(1)))
ul.appendChild(createItem(thing(2)))
ul.appendChild(createItem(sheep(3)))
ul.appendChild(createItem(ox(4)))
ul.appendChild(createItem(inch(6)))
ul.appendChild(createItem(geese(7)))

const root = document.querySelector('#root')
root.appendChild(ul)
