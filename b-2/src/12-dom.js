'use strict'

const item0 = {
    completed: true,
    id: -1,
    text: 'I done it.',
}
const item1 = {
    completed: false,
    id: 0,
    text: 'Just do it!',
}
const item2 = {
    completed: false,
    id: 1,
    text: '<script src="do-do.js"></script>',
}

// Given untrusted text, replace angle brackets with HTML entity references.
const escapeHTML = text => text.replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Given item object, return li element.
const renderItem = item => {
    const li = document.createElement('li')
    li.setAttribute('class', item.completed ? 'completed' : 'uncompleted')
    li.innerHTML = escapeHTML(item.text)
    return li
}

// Given array of item objects,
// return ul element which contains li element for each item.
const renderList = items => {
    const ul = document.createElement('ul')
    items.forEach(item => {
        const li = renderItem(item)
        ul.appendChild(li)
    })
    return ul
}

const root = document.querySelector('#root')
root.appendChild(renderList([item0, item1, item2]))
