describe('test method of regexp', function () {
    const MULTILINE_REGEXP = /[\r\n]/;

    test('single line', function () {
        expect(MULTILINE_REGEXP.test('single line')).toBe(false);
    });
    test('newline', function () {
        expect(MULTILINE_REGEXP.test('multi\nline')).toBe(true);
    });
    test('newlines', function () {
        expect(MULTILINE_REGEXP.test('one\ntwo\nthree')).toBe(true);
    });
    test('return', function () {
        expect(MULTILINE_REGEXP.test('multi\rline')).toBe(true);
    });
    test('both', function () {
        expect(MULTILINE_REGEXP.test('multi\r\nline')).toBe(true);
    });
});

describe('replace method of string', function () {
    const escapeHTML = function (text) {
      return text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    };

    test('no tags', function () {
        const untrusted = 'no tags';
        expect(escapeHTML(untrusted)).toBe(untrusted);
    });
    test('no tags', function () {
        const untrusted = '<script src="a-big-hack-attack.js"></script>';
        const expected = '&lt;script src="a-big-hack-attack.js"&gt;&lt;/script&gt;'
        expect(escapeHTML(untrusted)).toBe(expected);
    });
    test('render items', function () {
        const text0 = 'I done it.';
        const text1 = 'Just do it!';
        const text2 = 'To do, or not to do?';
        const items = [
            {completed: true, id: 0, text: text0},
            {completed: false, id: 1, text: text1},
            {completed: false, id: 2, text: text2},
        ];

        const received = '<ul>' + items.map(function (item) {
            const className = item.completed ? 'completed' : 'uncompleted';
            return '<li class="' + className + '">' + escapeHTML(item.text) + '</li>';
        }).join('') + '</ul>';
        const expected =
            '<ul>' +
            '<li class="completed">' + text0 + '</li>' +
            '<li class="uncompleted">' + text1 + '</li>' +
            '<li class="uncompleted">' + text2 + '</li>' +
            '</ul>';
        expect(received).toBe(expected);
    });
});
