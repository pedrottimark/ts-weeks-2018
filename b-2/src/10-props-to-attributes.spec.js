// Given props object from React,
// return array of attribute objects for HTML.
const toAttributes = function (props) {
    return Object.keys(props).map(function (key) {
        return {
            name: key,
            value: props[key]
        }
    })
}

it('converts empty array', () => {
    const props = {}
    const attributes = []
    expect(toAttributes(props)).toEqual(attributes)
})

it('converts object with one prop', () => {
    const titleValue = 'description of element'
    const props = {
        title: titleValue
    }
    const attributes = [
        {
            name: 'title',
            value: titleValue,
        }
    ]
    expect(toAttributes(props)).toEqual(attributes)
})

it('converts object with two props', () => {
    const altValue = 'please be accessible'
    const titleValue = 'description of element'
    const props = {
        alt: altValue,
        title: titleValue
    }
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
    expect(toAttributes(props)).toEqual(attributes)
})

it('does not sort by prop names', () => {
    const altValue = 'please be accessible'
    const titleValue = 'description of element'
    const props = {
        title: titleValue,
        alt: altValue,
    }
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
    expect(toAttributes(props)).not.toEqual(attributes)
})
