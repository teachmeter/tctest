const sum = require('./sum');

test('Method exists', () => {
    expect(sum).toBeInstanceOf(Function)
})

test('adds 1+2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
})

test('adds 1+1 to not equal 3', () => {
    expect(sum(1,1)).not.toBe(3)
})