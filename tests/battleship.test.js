const ship = require('../components/battleship');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});


describe('calculator', () => {
    test('add numbers', () => {
        expect(calculator(1, "+", 1)).toBe(2)
    })
    test('subtract numbers', () => {
        expect(calculator(2, "-", 1)).toBe(1)
    })
    test('multiply numbers', () => {
        expect(calculator(4, "*", 2)).toBe(8)
    })
    test('divide numbers', () => {
        expect(calculator(6, "/", 3)).toBe(2)
    })
});