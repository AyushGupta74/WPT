let arr = [10,20,30,32,35,40]

//EXample of synchronous callbck function
let callback = (element,ind,arr)=>{console.log(ind,element,arr)}
arr.forEach(callback)

let squares = arr.map(function (element){ return Math.pow(element,2)})
console.log(squares)

let divsibleby4 = arr.filter(function (element){
    if(element%4 == 0)
        return true
    else
       return false
})
console.log(divsibleby4)




console.log("end of prog")

