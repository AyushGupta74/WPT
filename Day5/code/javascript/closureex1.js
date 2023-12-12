function makeAdder(x)
{
    return function(y)
             {return x + y;};
}
const add5 =makeAdder(5);
const add10 =makeAdder(10);
const add12 = makeAdder(12);

console.log(add5(2));
console.log(add10(2));
console.log(add12(1),add12(10))
