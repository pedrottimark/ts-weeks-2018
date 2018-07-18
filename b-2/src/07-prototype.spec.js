const ELEMENT_NODE = 1
const TEXT_NODE = 3

const createElement = tagName => ({
    nodeType: ELEMENT_NODE,
    tagName: tagName.toUpperCase(),
    attributes: [],
    childNodes: [],
})

const createTextNode = data => ({
    nodeType: TEXT_NODE,
    data,
})

describe('emulate DOM', () => {
    test('empty element', () => {
        const p = createElement('p')

        expect(p.nodeType).toBe(ELEMENT_NODE)
        expect(p.tagName).toBe('P')
        expect(p.attributes).toEqual([])
        expect(p.childNodes).toEqual([])
    })
    test('text node', () => {
        const data = 'Delightful JavaScript testing'
        const text = createTextNode(data)

        expect(text.nodeType).toBe(TEXT_NODE)
        expect(text.data).toBe(data)
    })

    /*
    it('appends element and text nodes', () => {
        const data1 = 'Delightful'
        const text1 = createTextNode(data1)
        const strong = createElement('strong')
        strong.appendChild(text1)

        const data2 = ' JavaScript testing'
        const text2 = createTextNode(data2)

        const p = createElement('p')
        p.appendChild(strong)
        p.appendChild(text2)

        expect(p.childNodes).toEqual([
            {
                nodeType: ELEMENT_NODE,
                tagName: 'STRONG',
                attributes: [],
                childNodes: [
                    {
                        nodeType: TEXT_NODE,
                        data: data1,
                    },
                ]
            },
            {
                nodeType: TEXT_NODE,
                data: data2,
            },
        ])
    })
    */

    /*
    it('sets attributes', () => {
        const img = createElement('img')
        img.setAttribute('src', 'pretty.jpeg')
        img.setAttribute('title', 'pretty picture')
        img.setAttribute('title', 'description of picture')
        expect(img.attributes).toEqual([
            {
                name: 'src',
                value: 'pretty.jpeg',
            },
            {
                name: 'title',
                value: 'description of picture',
            },
        ])
    })
    */
})
