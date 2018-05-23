import {addItem, deleteItem, toggleItem} from './12-typescript-module'

it('adds item to empty array', () => {
    const items = []
    const text = 'Just do it!'
    const item = {
        completed: false,
        id: 1,
        text,
    }

    const received = addItem(items, text)

    expect(received).not.toBe(items) // because pure
    expect(received).toEqual([item])
})
it('adds item to non-empty array', () => {
    const item0 = {
        completed: true,
        id: 0,
        text: 'I done it.',
    }
    const items = [item0]
    const text = 'Just do it!'
    const item1 = {
        completed: false,
        id: 1,
        text,
    }

    const received = addItem(items, text)

    expect(received).not.toBe(items) // because pure
    expect(received).toEqual([item0, item1])
})
it('deletes only item so returned array is empty', () => {
    const id = 7
    const item = {
        completed: false,
        id,
        text: 'Just do it!',
    }
    const items = [item]

    const received = deleteItem(items, id)

    expect(received).toEqual([])
})
it('deletes item so returned array is non-empty', () => {
    const item0 = {
        completed: true,
        id: 1,
        text: 'I done it.',
    }
    const id = 2
    const item1 = {
        completed: false,
        id,
        text: 'Just do it!',
    }
    const items = [item0, item1]

    const received = deleteItem(items, id)

    expect(received).not.toBe(items) // because pure
    expect(received).toEqual([item0])
})
it('toggles an item whose completed value was true', () => {
    const id = 1
    const text = 'I done it.'
    const item0 = {
        completed: true,
        id,
        text,
    }
    const expected0 = {
        completed: false,
        id,
        text,
    }
    const item1 = {
        completed: false,
        id: 2,
        text: 'Just do it!',
    }
    const items = [item0, item1]

    const received = toggleItem(items, id)

    expect(received).not.toBe(items) // because pure
    expect(received[0]).not.toBe(item0) // because pure
    expect(received[1]).toBe(item1) // because pure
    expect(received).toEqual([expected0, item1])
})
it('toggles an item whose completed value was false', () => {
    const item0 = {
        completed: true,
        id: 1,
        text: 'I done it.',
    }
    const id = 2
    const text = 'Just do it!'
    const item1 = {
        completed: false,
        id,
        text,
    }
    const expected1 = {
        completed: true,
        id,
        text,
    }
    const items = [item0, item1]

    const received = toggleItem(items, id)

    expect(received).not.toBe(items) // because pure
    expect(received[0]).toBe(item0) // because pure
    expect(received[1]).not.toBe(item1) // because pure
    expect(received).toEqual([item0, expected1])
})
