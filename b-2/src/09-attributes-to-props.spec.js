///*
// Given array of attribute objects from HTML,
// return props object for React.
const toProps = attributes => {
    const props = {}
    for (let i = 0; i !== attributes.length; i += 1) {
        const attribute = attributes[i]
        props[attribute.name] = attribute.value
    }
    return props
}
//*/

/*
// Given array of attribute objects from HTML,
// return props object for React.
const toProps = attributes =>
    attributes.reduce((props, attribute) => {
        // TODO
        return props
    }, {})
*/

it('converts empty array', () => {
    const attributes = []
    const props = {}
    expect(toProps(attributes)).toEqual(props)
})

it('converts array with one item', () => {
    const titleValue = 'describtion of element'
    const attributes = [
        {
            name: 'title',
            value: titleValue,
        }
    ]
    const props = {
        title: titleValue
    }
    expect(toProps(attributes)).toEqual(props)
})

it('converts array with two items', () => {
    const altValue = 'please be accessible'
    const titleValue = 'description of element'
    const attributes = [
        {
            name: 'alt',
            value: altValue,
        },
        {
            name: 'title',
            value: titleValue,
        }
    ]
    const props = {
        alt: altValue,
        title: titleValue
    }
    expect(toProps(attributes)).toEqual(props)
})
