var arr = []

arr.push(12,13,14)

console.log(arr)

arr.push(20)
console.log(arr)

var x = arr.pop()
console.log(x,arr)

console.log(arr.length)

arr.push(30,40,50)
console.log("before splice ",arr)
arr.splice(2,2)
//console.log(arr.splice(arr.length-1,1))
console.log("after splice ",arr)
arr.reverse()
console.log("reverse ",arr)
arr.push(1,-1,22)
arr.sort()
console.log("sort ",arr)











