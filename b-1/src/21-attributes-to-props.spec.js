const toProps = function (attributes) {
    const props = {};
    for (let i = 0; i !== attributes.length; i += 1) {
        const attribute = attributes[i];
        props[attribute.name] = attribute.value;
    }
    return props;
};

/*
const toProps = function (attributes) {
    return attributes.reduce(function (props, attribute) {
        // TODO
    }, {});
}
*/

it('converts empty array', function () {
    const attributes = [];
    const props = {};
    expect(toProps(attributes)).toEqual(props);
});

it('converts array with one item', function () {
    const titleValue = 'use a title attribute to describe an element';
    const attributes = [
        {
            name: 'title',
            value: titleValue,
        }
    ];
    const props = {
        title: titleValue
    };
    expect(toProps(attributes)).toEqual(props);
});

it('does not change attribute names', function () {
    // For example, from class in markup to className in DOM and React
    const classValue = 'class value';
    const titleValue = 'use a title attribute to describe an element';
    const attributes = [
        {
            name: 'class',
            value: classValue,
        },
        {
            name: 'title',
            value: titleValue,
        }
    ];
    const props = {
        class: classValue,
        title: titleValue
    };
    expect(toProps(attributes)).toEqual(props);
});
