//pass function as a parameter
//to another function

function doJob(f1)
{
    for(var i=0;i<5;i++)
    {
        f1();
    }
}


doJob(function () {
    console.log("hi")
})

doJob(()=>{console.log("heys")})

console.log("--------")
test()
console.log("--------")

//named function
function test()
{
    console.log("test")
}

doJob(test)

let v = function()
{
    console.log("bye")
}

doJob(v)


























