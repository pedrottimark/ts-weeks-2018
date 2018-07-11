const item0 = {completed: true, id: 0, text: 'I done it.'};
const item1 = {completed: false, id: 1, text: 'Just do it!'};
const item2 = {completed: false, id: -1, text: 'To do, or not to do?'};
const items = [item0, item1, item2];

describe('sort comparison callback', function () {
    const copied = items.slice();
    copied.sort(function (itemA, itemB) {
        // TODO
        // return 0 if id of itemA is equal to id of itemB
        // return -1 if id of itemA is less than id of itemB
        // return 1 if id of itemA is greater than id of itemB
    });
    expect(copied).toEqual([item2, item0, item1]);
})
