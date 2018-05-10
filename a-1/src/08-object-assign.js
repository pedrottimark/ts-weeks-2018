const item = {
    completed: false,
    id: 1,
    text: 'To do, or not to do?',
};

const copiedWithChanges = Object.assign({}, item, {
    completed: !item.completed
});
console.info('copiedWithChanges\n', copiedWithChanges);

const copiedWithoutChanges = Object.assign({}, item);
console.info('\ncopiedWithoutChanges\n', copiedWithoutChanges);

console.info('\noriginal item\n', item);
Object.assign(item, {
    completed: !item.completed
});
console.info('mutated item\n', item);
