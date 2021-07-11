function sum1(a, b, c) { return +a + +b + +c; }
let sum11 = (a, b, c) => +a + +b + c;

//alert("1ый вар. с обычной функцией: " + sum1(5, 10, 3));
//alert("1ый вар. со стрелочной функцией: " + sum1(5, 10, 3));

function sum2(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

function sum22(a) {
    function func(b) {
        func.currentSum += b;
        return func;
    }

    func.currentSum = a;

    func.toString = () => {
        return func.currentSum;
    };

    return func;
}

//alert("2ый вар. с замыканием: " + sum2(5)(10)(3));
//alert("2ый вар. с замыканием масштабируемый: " + sum22(5)(10)(3)(9));

function sum3(a) {
    function func(b) {
        func.currentSum += b;
        return func;
    }

    func.add = function (c) {
        func.currentSum += c;
        return this;
    };

    func.result = () => {
        alert(func.toString());
        return func.currentThis;
    };

    func.currentSum = a;
    func.currentThis = func;

    func.toString = () => {
        return func.currentSum;
    };

    return func;
}

sum3(5)(10)(3).add(4).result().add(9).add(10).result();