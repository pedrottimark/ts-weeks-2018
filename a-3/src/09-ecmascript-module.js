// Given an array of item objects, return the smallest positive number
// that is greater than every item id property.
const idNext = items => items.reduce((id, item) => item.id < id ? id : item.id + 1, 1)

// Given an array of item objects and the text of a new item,
// return a new array with the new item at the end.
// The new item has a completed property which is false.
// The new item has an id property whose value is computed by idNext function.
module.exports.addItem = (items, text) => // TODO

// Given an array of item objects and the id of an item to delete,
// return a new array which contains the non-deleted items.
module.exports.deleteItem = (items, id) => // TODO

// Given an array of item objects and the id of an item to toggle,
// return a new array which contains a copy of the toggled item.
module.exports.toggleItem = (items, id) => // TODO
