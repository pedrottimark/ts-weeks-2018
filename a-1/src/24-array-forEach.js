// Given items and id, mutate the item with the id
// so its completed property has opposite value.
const toggleCompletedImpure = function (items, id) {
    items.forEach(function (item) {
        // TODO
    });
};

const logItems = function (items, logger = console.info) {
    // TODO using forEach method
}

const item0 = {completed: true, id: 2, text: 'I done it.'};
const item1 = {completed: false, id: 4, text: 'Just do it!'};
const item2 = {completed: false, id: 6, text: 'To do, or not to do?'};
const items = [item0, item1, item2];

console.info('before toggle');
logItems(items);

toggleCompletedImpure(items, 4);

console.info('\nafter toggle');
logItems(items);
