const React = require('react')
const format = require('pretty-format')

const elementSymbol = Symbol.for('react.element')

// Add serializer which formats React element as object instead of markup.
expect.addSnapshotSerializer({
    print(val) {
        return format(val)
    },
    test(val) {
        return val && val.$$typeof === elementSymbol
    },
})

describe('React elements as objects', () => {
    it('represents an empty element with no props', () => {
        const type = 'br'
        const props = null
        const element = React.createElement(type, props)
        expect(element).toMatchSnapshot()
    })
    it('represents an empty element with two props', () => {
        const type = 'img'
        const props = {
            src: 'pretty.jpeg',
            title: 'pretty picture',
        }
        const element = React.createElement(type, props)
        expect(element).toMatchSnapshot()
    })
    it('represents an element with number as child', () => {
        const type = 'td'
        const props = null
        const child = 17
        const element = React.createElement(type, props, child)
        expect(element).toMatchSnapshot()
    })
    it('represents an element with text and elements as children', () => {
        const type = 'li'
        const props = null
        const element = React.createElement(
            type,
            props,
            'Just',
            React.createElement('strong', null, 'do'),
            ' it!'
        )
        expect(element).toMatchSnapshot()
    })
    it('escapes angle brackets in text', () => {
        const item = {
            completed: false,
            id: 1,
            text: '<script src="do-do.js"></script>',
        }
        const type = 'li'
        const props = {
            className: item.completed ? 'completed' : 'uncompleted',
        }
        const child = item.text
        const element = React.createElement(type, props, child)
        expect(element).toMatchSnapshot()
    })
})
