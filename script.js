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