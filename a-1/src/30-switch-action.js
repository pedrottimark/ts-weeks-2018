// Given array of todo items,
// return minimum non-negative integer that is greater than any id property.
const idNext = function (items) {
    return items.reduce(
      (id, item) => id <= item.id ? item.id + 1 : id,
      0
    );
};

module.exports = function (items, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return items.concat({
                completed: false,
                id: idNext(items),
                text: action.text,
            });

        case 'DELETE_ITEM':
            return items.filter(function (item) {
                return item.id !== action.id;
            });

        case 'TOGGLE_COMPLETED':
            return items.map(function (item) {
                if (item.id === action.id) {
                    return Object.assign({}, item, {completed: !item.completed});
                }
                return item;
            });

        default:
            return items;
    }
};
