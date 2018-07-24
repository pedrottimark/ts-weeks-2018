// TODO import the virtual constructor functions

// TODO const ELEMENT_NODE
// TODO const TEXT_NODE

describe('emulate DOM', () => {
    test('empty element', () => {
        const node = createElement('p')
        expect(node.nodeType).toBe(ELEMENT_NODE)
        expect(node.tagName).toBe('P')
        expect(node.attributes).toEqual([])
        expect(node.childNodes).toEqual([])
    })
    test('text node', () => {
        const text = 'Delightful JavaScript testing'
        const node = createTextNode(text)
        expect(node.nodeType).toBe(TEXT_NODE)
        expect(node.data).toBe(text)
    })
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
    it('sets and gets attributes', () => {
        const img = createElement('img')
        const src = 'pretty.jpeg'
        const title = 'description of picture'
        img.setAttribute('src', src)
        img.setAttribute('title', 'pretty picture') // will overwrite in next line
        img.setAttribute('title', title)
        expect(img.getAttribute('src')).toBe(src)
        expect(img.getAttribute('title')).toBe(title)
        expect(img.getAttribute('unexpected')).toBe(undefined)
    })
})
