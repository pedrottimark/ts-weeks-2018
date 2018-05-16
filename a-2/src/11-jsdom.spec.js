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

// Given untrusted text, replace angle brackets with HTML entity references.
const escapeHTML = text => text.replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Given item object, return li element.
const renderItem = item => {
    const li = document.createElement('li');
    li.setAttribute('class', item.completed ? 'completed' : 'uncompleted');
    li.innerHTML = item.text;
    // li.innerHTML = escapeHTML(item.text);
    return li;
};

describe('item', () => {
    it('renders an item with completed property true', () => {
        const element = renderItem(item0);
        expect(element).toMatchSnapshot();
    });
    it('renders an item with completed property false', () => {
        const element = renderItem(item1);
        expect(element).toMatchSnapshot();
    });
    it('renders an item with HTML entity references', () => {
        const element = renderItem(item2);
        expect(element).toMatchSnapshot();
    });
});

/*
describe('list', () => {
    // Given array of item objects,
    // return ul element which contains li element for each item.
    const renderList = items => {
        // TODO
        // Hint: because this is not yet React, don’t use array map method!
        return ul;
    };

    it('renders an empty list', () => {
        const element = renderList([]);
        expect(element).toMatchSnapshot();
    });
    it('renders a non-empty list', () => {
        const element = renderList([item0, item1, item2]);
        expect(element).toMatchSnapshot();
    });
});
*/
