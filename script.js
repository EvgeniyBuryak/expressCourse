function add() {
    return function (a, b) {
        return a + b;
    }
}

/*
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

alert(sum(5, 10, 3)); //18
alert(sum(5)(10)(3)); //18
alert(sum(5)(10, 3)); //15 <- don't work
sum(5)(10)(3).add(4).result().add(9).add(10).result(); //22 and 41
sum(5)(10)(3).add(4).add(9).add(10).result((value) => {
    alert(value);
}); //41
*/

function curry(func) {    
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function pass(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}

function sum(a, b, c) {
    sum.current = a + b + c;

    sum.add = (d) => {
        sum.current += d
        return sum;
    };

    sum.result = function (f) {
        let re = this.toString();
        (!f) ? alert(re) : f(re);
        return this;
    };

    sum.toString = function () {
        return this.current;
    };

    return sum;
}

let curriedSum = curry(sum);

alert(curriedSum(1, 2, 3)); // 6, всё ещё можно вызывать нормально  
alert(curriedSum(1)(2, 3)); // 6, каррирование первого аргумента    
alert(curriedSum(1)(2)(3).add(4).result()); // 10, каррирование всех аргументов
curriedSum(5)(10)(3).add(4).add(9).add(10).result((value) => {
    alert(value);
}); //41