function addition(a , b) {
    return a + b;
}

function division(x , y) {
    if (y == 0) {
        throw new Error("impossible de diviser par 0");
    }
    return x / y;
}

function cube(c) {
    return c * c * c;
}

module.exports = {addition, division, cube}