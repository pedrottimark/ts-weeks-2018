// TODO import

describe('createElement', () => {
    it('represents an empty element with no props', () => {
        const type = 'br'
        const props = null
        const element = createElement(type, props)
        expect(element).toMatchSnapshot()
    })
    it('represents an empty element with two props', () => {
        const type = 'img'
        const props = {
            src: 'pretty.jpeg',
            title: 'pretty picture',
        }
        const element = createElement(type, props)
        expect(element).toMatchSnapshot()
    })
    it('represents an element with number as child', () => {
        const type = 'td'
        const props = null
        const child = 17
        const element = createElement(type, props, child)
        expect(element).toMatchSnapshot()
    })
    it('represents an element with text and elements as children', () => {
        const type = 'li'
        const props = null
        const element = createElement(
            type,
            props,
            'Just',
            createElement('strong', null, 'do'),
            ' it!'
        )
        expect(element).toMatchSnapshot()
    })
    it('escapes angle brackets in text', () => {
        const type = 'li'
        const props = null
        const child = '<script src="do-do.js"></script>'
        const element = createElement(type, props, child)
        expect(element).toMatchSnapshot()
    })
})
