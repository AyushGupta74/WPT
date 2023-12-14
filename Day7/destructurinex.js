let obj ={productName:"maggi",cost:"30"}

//let productName = obj.productName
//let cost = obj.cost

//property productName is collected in variable a
//property cost is collected in variable b
// let {productName:a,cost:b} = obj
// console.log(a,b)

//property productName is collected in variable productName
//property cost is collected in variable cost 
let {productName,cost} = obj


//Array destructuring ---
let arr = [ 10,20,30,40,50]

//let x = arr[1]
//let y = arr[2]

let [,x,y]= arr
console.log(x,y)




























