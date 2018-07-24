import createElement from './15-create-element.js'

const item0 = {
    completed: true,
    id: 1,
    text: 'I done it.',
}
const item1 = {
    completed: false,
    id: 2,
    text: 'Just do it!',
}
const item2 = {
    completed: false,
    id: 3,
    text: '<script src="do-do.js"></script>',
}
const items = [item0, item1, item2]

// Given item object, return li element.
const renderItem = ({completed, id, text}, onClick) =>
    createElement(
        'li',
        {
            className: completed ? 'completed' : 'uncompleted',
            onClick: onClick.bind(null, id),
        },
        text
    )

// Given array of item objects,
// return ul element which contains li element for each item.
const renderList = (items, onClick) =>
    createElement(
        'ul',
        null,
        ...items.map(item => renderItem(item, onClick))
    )

const root = document.querySelector('#root')
root.appendChild(renderList(items, id => { console.log(`onClick id=${id}`) }))
