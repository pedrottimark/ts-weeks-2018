type Node = Element | TextNode

class Element {
    constructor(tagName) {
        this.nodeType = 1
        this.tagName = tagName.toUpperCase()
        this.attributes = []
        this.childNodes = []
    }

    // Given node, either element or text,
    // append it to childNodes of this instance.
    appendChild(node) {
        this.childNodes.push(node)
    }

    // Given name and value,
    // update or append attribute to attributes of this instance.
    setAttribute(name, value) {
        const attributes = this.attributes
        for (let i = 0; i < attributes.length; i += 1) {
            const attribute = attributes[i]
            if (attribute.name === name) {
                attribute.value = value
                return
            }
        }
        attributes.push({name, value})
    }

    // Given name, return value of attribute of this instance
    // otherwise undefined.
    getAttribute(name) {
        const found = this.attributes.find(attribute => attribute.name === name)
        return found && found.value
    }
}

export const createElement = tagName => new Element(tagName)

class TextNode {
    public readonly nodeType: number
    public data: string
    public constructor(data: string) {
        this.nodeType = 3
        this.data = data
    }
}

export const createTextNode = data => new TextNode(data)
