// Вариант 1 
let sum1 = (a, b, c) => a + b + c;

alert(sum1(5, 10, 3)); //18

// Вариант 2  
let sum2 = (a) => (b) => (c) => a + b + c;

//alert(sum2(5)(10)(3)); //18

// Вариант 3 
let sum3 = (a) => (b) => (c) => {
    let current = a + b + c;
    //let sum3.add = (d) => current += d;
    //return sum3.add;
}


//sum3(5)(10)(3).add(4).result().add(9).add(10).result();

// Вариант 4 

let sum = (a, b = 0, c = 0) => {

    let current = a + b + c;

    let func = (d) => {
        current += d;
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

sum(5)(10)(3).add(4).add(9).add(10).result((value) => {
    alert(value);
}); //41

/*sum(5).add(10).result((value) => {
    alert(value);
});
sum(5).result();
*/