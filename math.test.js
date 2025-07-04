const{division, addition, cube} = require('./math')

test("diviser 6 par 2", () => {
    expect(division(6,2)).toBe(3);
})

test("additionner 2 + 3", () => {
    expect(addition(2,3)).toBe(5);
})

test("multiplier 2 par lui meme, 3 fois", () => {
    expect(cube(2)).toBe(8);
})