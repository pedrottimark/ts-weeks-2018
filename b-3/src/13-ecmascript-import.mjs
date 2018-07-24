import numerizer from './13-ecmascript-export'

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

const array = []
array.push(thing(0))
array.push(thing(1))
array.push(thing(2))
array.push(sheep(3))
array.push(ox(4))
array.push(inch(6))
array.push(geese(7))

console.log(array)
