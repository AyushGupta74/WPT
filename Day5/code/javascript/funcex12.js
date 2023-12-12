function sayHi(choice,greeting)
{

    function indian(name)
    {
        console.log(greeting)
        console.log("namaste",name)
    }

    function US(name)
    {
        console.log("hi",name)
    }

    function Japanese(n)
    {
        console.log("konnichiwa",n)
    }

    switch(choice)
    {
        case 1 : return indian;break;
        case 2: return US; break;
        case 3: return Japanese;break;
        case 4: return (w)=>{console.log("Hola",w)} ; break;
    }
}


let rv = sayHi(1,"good morning")
console.log(typeof(rv))
rv("amit")
rv("nisha")






