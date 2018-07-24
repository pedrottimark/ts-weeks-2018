// TODO interface Item
// TODO type Items

const idNext = items => items.reduce((id, item) => item.id < id ? id : item.id + 1, 1)

// Given an array of item objects and the text of a new item,
// return a new array with the new item at the end.
// The new item has a completed property which is false.
// The new item has an id property whose value is computed by idNext function.
export const addItem = (items, text) =>
    [...items, {completed: false, id: idNext(items), text}]

// Given an array of item objects and the id of an item to delete,
// return a new array which contains the non-deleted items.
export const deleteItem = (items, id) =>
    items.filter(item => item.id !== id)

// Given an array of item objects and the id of an item to toggle,
// return a new array which contains a copy of the toggled item.
export const toggleItem = (items, id) =>
    items.map(item => item.id === id ? {...item, completed: !item.completed} : item)
