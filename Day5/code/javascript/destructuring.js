/*
var arr =[10,20,30,40]

/* var a = arr[0]
var b = arr[2]
 */
/*
var [a,,,b] = arr
console.log(a,b)
*/

var obj = {fname:'prachi',marks:40,city:'pune',setName:function(n){console.log(n)}}
//var fname = obj.fname
//var setName = obj['setName']

//var {fname,setName} =obj 
//console.log(fname,setName)
 
var {fname:nm,setName:set} =obj 
console.log(nm) 
set('hi')

