const ON_REGEXP = /^on[A-Z]/

// Given prop key, return corresponding attribute name.
const getAttributeName = (key: string): string => {
    switch (key) {
        case 'className':
            return 'class'
        default:
            return key.toLowerCase()
    }
}

// Given prop key of event like onClick,
// return corresponding event name like click.
const getEventName = (key: string): string => key.slice(2).toLowerCase()

// Given string or number item in children array,
// return text node; otherwise return element node.
const getChild = (item: number | string | Element): Node => {
    if (typeof item === 'number') {
        return document.createTextNode(String(item))
    }
    if (typeof item === 'string') {
        return document.createTextNode(item)
    }
    return item
}

type Item = false | null | undefined | number | string | Element

// Given type as string, props as object or null,
// and children as string or number,
// or element from createElement call,
// return DOM element.
const createElement = (type: string, props?: object, ...items: Item[]) => {
    const element = document.createElement(type)

    if (props) {
        // for-of?
        Object.keys(props).forEach(key => {
            const value = props[key]
            if (ON_REGEXP.test(key)) {
                element.addEventListener(getEventName(key), value)
            } else {
                const name = getAttributeName(key)
                switch (value) {
                    case true:
                        element.setAttribute(name, '')
                        break
                    case false:
                        element.removeAttribute(name)
                        break
                    default:
                        element.setAttribute(name, value)
                }
            }
        })
    }

    items.forEach(item => {
        // Ignore falsey values, especially from conditional and.
        if (item !== false && item !== null && item !== undefined) {
            element.appendChild(getChild(item))
        }
    })

    return element
}

export default createElement
