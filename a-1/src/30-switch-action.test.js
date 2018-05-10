const reducer = require('./30-switch-action');

const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

describe('add', function () {
    const text = 'do this';
    const action = {
        type: ADD_ITEM,
        text: text,
    };

    it('adds an item to an empty array', function () {
        const items = [];
        const added = {
            completed: false,
            id: 0,
            text: text,
        };
        const expected = [added];
        expect(reducer(items, action)).toEqual(expected);
    });
    it('adds an item to a non-empty array', function () {
        const item0 = {
            completed: true,
            id: 1,
            text: 'done that'
        };
        const items = [item0];
        const added = {
            completed: false,
            id: 2,
            text: text,
        };
        const expected = [item0, added];
        expect(reducer(items, action)).toEqual(expected);
    });
});

describe('delete', function () {
    const item0 = {
        completed: true,
        id: 0,
        text: 'item0',
    };
    const item1 = {
        completed: false,
        id: 1,
        text: 'item1',
    };
    const item2 = {
        completed: false,
        id: 2,
        text: 'item2',
    };

    it('deletes the first item', function () {
        const items = [item0, item1, item2];
        const action = {
            type: DELETE_ITEM,
            id: 0,
        };
        const expected = [item1, item2];
        expect(reducer(items, action)).toEqual(expected);
    });
    it('deletes the middle item', function () {
        const items = [item0, item1, item2];
        const action = {
            type: DELETE_ITEM,
            id: 1,
        };
        const expected = [item0, item2];
        expect(reducer(items, action)).toEqual(expected);
    });
    it('deletes the last item', function () {
        const items = [item0, item1, item2];
        const action = {
            type: DELETE_ITEM,
            id: 2,
        };
        const expected = [item0, item1];
        expect(reducer(items, action)).toEqual(expected);
    });
});

describe('toggle', function () {
    const text0 = 'text0';
    const item0 = {
        completed: true,
        id: 0,
        text: text0,
    };
    const item1 = {
        completed: false,
        id: 1,
        text: 'text1',
    };
    const text2 = 'text2';
    const item2 = {
        completed: false,
        id: 2,
        text: text2,
    };

    it('toggles a completed item', function () {
        const items = [
            Object.assign({}, item0),
            Object.assign({}, item1),
            Object.assign({}, item2),
        ];
        const action = {
            type: TOGGLE_COMPLETED,
            id: 0,
        };
        const item0Toggled = {
            completed: false,
            id: 0,
            text: text0,
        };
        const expected = [item0Toggled, item1, item2];
        const received = reducer(items, action);
        expect(received).toEqual(expected);
        expect(received[0]).not.toBe(items[0]);
    });
   it('toggles an uncompleted item', function () {
       const items = [
           Object.assign({}, item0),
           Object.assign({}, item1),
           Object.assign({}, item2),
       ];
       const action = {
           type: TOGGLE_COMPLETED,
           id: 2,
       };
       const item2Toggled = {
           completed: true,
           id: 2,
           text: text2,
       };
       const expected = [item0, item1, item2Toggled];
       const received = reducer(items, action);
       expect(received).toEqual(expected);
       expect(received[2]).not.toBe(items[2]);
   });
});

it('it returns array for default case', function () {
    const item0 = {
        completed: true,
        id: 0,
        text: 'To do or not to do.',
    };
    const items = [item0];
    const action = {
        type: 'UNKNOWN_ACTION',
        id: 0,
    };
    expect(reducer(items, action)).toBe(items);
});

it('reduces multiple actions', function () {
    const text0 = 'Every journey begins with a single step.';
    const text1 = 'Two’s company, three’s a crowd.';
    const text2 = 'Two steps are better than one.';
    const action0 = {
        type: ADD_ITEM,
        text: text0,
    };
    const action1 = {
        type: TOGGLE_COMPLETED,
        id: 0,
    };
    const action2 = {
        type: ADD_ITEM,
        text: text1,
    };
    const action3 = {
        type: ADD_ITEM,
        text: text2,
    };
    const action4 = {
        type: 'DELETE_ITEM',
        id: 1,
    };
    const actions = [action0, action1, action2, action3, action4];
    const expected = [
        {
            completed: true,
            id: 0,
            text: text0,
        },
        {
            completed: false,
            id: 2,
            text: text2,
        }
    ];
    expect(actions.reduce(reducer, [])).toEqual(expected);
});
