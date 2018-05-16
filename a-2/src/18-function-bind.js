'use strict';

const item0 = {
    completed: true,
    id: -1,
    text: 'I done it.',
};
const item1 = {
    completed: false,
    id: 0,
    text: 'Just do it!',
};
const item2 = {
    completed: false,
    id: 1,
    text: '<script src="do-do.js"></script>',
};
const items = [item0, item1, item2];

// Given untrusted text, replace angle brackets with HTML entity references.
const escapeHTML = text => text.replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Given item object, return li element.
const renderItem = ({completed, id, text}, onClick) => {
    const li = document.createElement('li');
    li.addEventListener('click', () => { onClick(id); });
    li.setAttribute('class', completed ? 'completed' : 'uncompleted');
    li.innerHTML = escapeHTML(text);
    return li;
};

// Given array of item objects,
// return ul element which contains li element for each item.
const renderList = (items, onClick) => {
    const ul = document.createElement('ul');
    items.forEach(item => {
        const li = renderItem(item, onClick);
        ul.appendChild(li);
    });
    return ul;
};

const root = document.querySelector('#root');
root.appendChild(renderList(items, id => { console.log(`onClick id=${id}`); }));
