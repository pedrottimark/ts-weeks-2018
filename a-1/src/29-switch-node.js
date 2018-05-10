const DOCUMENT_NODE = 9;
const ELEMENT_NODE = 1;
const TEXT_NODE = 3;

const createElement = function (tagName) {
    return {
        nodeType: ELEMENT_NODE,
        localName: tagName.toLowerCase(),
        tagName: tagName.toUpperCase(),
    }
};

const createTextNode = function (data) {
    return {
        nodeType: TEXT_NODE,
        data: data,
    }
};

const print = function (node) {
    /*
    switch (node.nodeType) {
        case ELEMENT_NODE:
            console.info('element node localName=' + node.localName);
            break;

        case TEXT_NODE:
            console.info('text node data=' + node.data);
            break;

        default:
            console.info('nodeType=' + node.nodeType);
    }
    */
    if (node.nodeType === ELEMENT_NODE) {
        console.info('element node localName=' + node.localName);
    } else if (node.nodeType === TEXT_NODE) {
        console.info('text node data=' + node.data);
    } else {
        console.info('nodeType=' + node.nodeType);
    }
};

print(createElement('p'));
print(createTextNode('The text, the whole text, and nothing but the text'));
print({nodeType: DOCUMENT_NODE});
