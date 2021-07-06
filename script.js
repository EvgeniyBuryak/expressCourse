// Вариант 1
function sum1(a, b, c) {
    return +a + +b + +c;
}

alert(sum1(5, 10, 3));

// Вариант 2 
function sum2(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

alert(sum2(5)(10)(3));