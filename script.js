function sum(...rest) {

    let current = rest.reduce((a, b) => a + b);

    let func = (c) => {
        current += c;
        return func;
    };

    func.add = func;

    func.result = (f = alert) => {
        f(current);
        return func;
    };

    func.toString = () => current;

    return func;
}

alert(sum(5, 10, 3)); //18 
alert(sum(5)(10)(3)); //18 
sum(5)(10)(3).add(4).result().add(9).add(10).result(); //22 and 41    
sum(5)(10)(3).add(4).add(9).add(10).result((value) => {
    alert(value);
}); //41

/*sum(5).add(10).result((value) => {
    alert(value);
});
sum(5).result();
*/
/*
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

function sum2(a, b, c) {
    sum2.current = a + b + c;

    sum2.add = (d) => {
        sum2.current += d
        return sum2;
    };

    sum2.result = (f) => {
        let re = sum2.toString();
        (!f) ? alert(re) : f(re);
        return sum2;
    };

    sum2.toString = () => {
        return sum2.current;
    };

    return sum2;
}

let curriedSum = curry(sum2);
*/
//alert(curriedSum(1, 2, 3)); // 6, всё ещё можно вызывать нормально  
//alert(curriedSum(1)(2, 3)); // 6, каррирование первого аргумента    
//curriedSum(1)(2)(3).result().add(4).result(); // 10, каррирование всех аргументов 
//curriedSum(5)(10)(3).add(4).add(9).add(10).result((value) => {
    //alert(value);
//}); //41

/*function resultAlert(f = 0, str = this.toString()) {
    (!f) ? alert(str) : f(str);
    return this;
}
function myCurry() {
    return function (f) {
        let str = this.toString();
        (!f) ? alert(func()) : f(str);
        return this;
    }
}*/
//let add = (a, b) => a + b;
//alert(sum(5)(10, 3)); //15 <- don't work 