const toAttributes = function (props) {
    return Object.keys(props).map(function (key) {
        return {
            name: key,
            value: props[key]
        };
    });
};

it('converts empty array', function () {
    const props = {};
    const attributes = [];
    expect(toAttributes(props)).toEqual(attributes);
});

it('converts object with one prop', function () {
    const titleValue = 'use a title attribute to describe an element';
    const props = {
        title: titleValue
    };
    const attributes = [
        {
            name: 'title',
            value: titleValue,
        }
    ];
    expect(toAttributes(props)).toEqual(attributes);
});

it('does not change prop names', function () {
    // For example, from class in markup to className in DOM and React
    const classValue = 'class value';
    const titleValue = 'use a title attribute to describe an element';
    const props = {
        class: classValue,
        title: titleValue
    };
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
    expect(toAttributes(props)).toEqual(attributes);
});

it('does not sort by prop names', function () {
    // For example, from class in markup to className in DOM and React
    const classValue = 'class value';
    const titleValue = 'use a title attribute to describe an element';
    const props = {
        title: titleValue,
        class: classValue,
    };
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
    expect(toAttributes(props)).not.toEqual(attributes);
});
