function counterFactory(seed){
let cnt=seed
function incrementor()
{
    //let cnt =0
    return ++cnt
}

return incrementor
}

let incr = counterFactory(1000)
console.log(incr(),incr(),incr())
cnt=99
console.log(incr())

let incr1 = counterFactory(500)
console.log(incr1(),incr1(),incr1(),incr1())
