const{division, addition} = require("./math")

test("diviser 6 par 2", () => {
    expect(division(6,2)).toBe(3);
})

test("additionner 2 + 3", () => {
    expect(addition(2,3)).toBe(5);
})