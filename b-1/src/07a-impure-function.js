const item = {
    completed: false,
    id: 1,
    text: 'To do, or not to do?',
};

const toggleCompleted = function (item) {
    item.completed = !item.completed;
};

console.info('Before toggleCompleted\n', item);
toggleCompleted(item);
console.info('After first toggleCompleted\n', item);
toggleCompleted(item);
console.info('After second toggleCompleted\n', item);
