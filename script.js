function add() {
    return function (a, b) {
        return a + b;
    }
}

function sum(...rest) {
    function func(b) {
        func.current += b;
        return func;
    }

    func.add = func;    

    func.result = function(f) {
        let re = this.toString();
        if (f instanceof Function) {
            f(re);
            return this;
        }
        alert(re);
        return this;
    };

    func.current = rest.reduce(add());

    func.toString = function() {
        return this.current;
    };

    return func;
}

alert(sum(5, 10, 3));
alert(sum(5)(10)(3));
//alert(sum(5)(10, 3));
sum(5)(10)(3).add(4).result().add(9).add(10).result(); //22 and 41
sum(5)(10)(3).add(4).add(9).add(10).result((value) => {
    alert(value);
}); //41