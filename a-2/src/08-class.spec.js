const ELEMENT_NODE = 1;
const TEXT_NODE = 3;

function Element(tagName) {
    this.tagName = tagName.toUpperCase();
    this.attributes = [];
    this.childNodes = [];
}

// Given node, either element or text,
// append it to childNodes of this instance.
Element.prototype.appendChild = function (node) {
    this.childNodes.push(node);
};

// Given name and value,
// update or append attribute to attributes of this instance.
Element.prototype.setAttribute = function (name, value) {
    const attributes = this.attributes;
    for (let i = 0; i < attributes.length; i += 1) {
        const attribute = attributes[i];
        if (attribute.name === name) {
            attribute.value = value;
            return;
        }
    }
    attributes.push({name, value});
};

// Given name, return value of attribute of this instance;
// otherwise undefined.
Element.prototype.getAttribute = function (name) {
    const found = this.attributes.find(attribute => attribute.name === name);
    return found && found.value;
};

Element.prototype.nodeType = ELEMENT_NODE;

const createElement = tagName => new Element(tagName);

class TextNode {
    constructor(data) {
        this.data = data;
    }
}

TextNode.prototype.nodeType = TEXT_NODE;

const createTextNode = data => new TextNode(data);

describe('emulate DOM', () => {
    test('empty element', () => {
        const node = createElement('p');
        expect(node.nodeType).toBe(ELEMENT_NODE);
        expect(node.tagName).toBe('P');
        expect(node.attributes).toEqual([]);
        expect(node.childNodes).toEqual([]);
    });
    test('text node', () => {
        const text = 'Delightful JavaScript testing';
        const node = createTextNode(text);
        expect(node.nodeType).toBe(TEXT_NODE);
        expect(node.data).toBe(text);
    });
    it('appends element and text nodes', () => {
        const data1 = 'Delightful';
        const text1 = createTextNode(data1);
        const strong = createElement('strong');
        strong.appendChild(text1);

        const data2 = ' JavaScript testing';
        const text2 = createTextNode(data2);

        const p = createElement('p');
        p.appendChild(strong);
        p.appendChild(text2);

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
        ]);
    });
    it('sets and gets attributes', () => {
        const img = createElement('img');
        const src = 'pretty.jpeg';
        const title = 'description of picture';
        img.setAttribute('src', src);
        img.setAttribute('title', 'pretty picture'); // will overwrite in next line
        img.setAttribute('title', title);
        expect(img.getAttribute('src')).toBe(src);
        expect(img.getAttribute('title')).toBe(title);
        expect(img.getAttribute('unexpected')).toBe(undefined);
    });
});
