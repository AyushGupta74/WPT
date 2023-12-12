/* var arr=[10,4,56,78,1,99,0,-99,-20]

//console.log("before sorting ",arr)
arr.sort((n1,n2)=>{
    if(n1>n2) return 1;
    if(n1<n2) return -1;
    else return 0;
})
//console.log("after sorting ",arr)

var arr2 = [{fname:'supriya',age:20,marks:88},{fname:'trisha',age:22,marks:82},{fname:'swamini',age:19,marks:78},{fname:'sharvari',age:23,marks:66}]

console.log("before sorting ",arr2)
arr2.sort((s1,s2)=>{
    if(s1.marks > s2.marks) return 1;
    if(s1.marks < s2.marks) return -1;
    else return 0;
    
})
console.log("after sorting ",arr2) */


var arr3 = [10,20,30,40]
var squarearr = arr3.map((element)=>{ return element*element})

/* console.log("arr3=",arr3)
console.log("squarearr=",squarearr) */


var arr2 = [{fname:'supriya',age:20,marks:88},{fname:'trisha',age:22,marks:82},{fname:'swamini',age:19,marks:78},{fname:'sharvari',age:23,marks:66}]
//get the list of all names from above array 
var names = arr2.map((element)=>{return element.fname})
var oddnames = arr2.map((element,i)=>{
    if(i%2 != 0)
    return element.fname
})
console.log("arr2=",arr2)
console.log("names=",names)
console.log("oddnames=",oddnames)

names.forEach((element,i)=>{console.log(i,element)})
names.forEach((element)=>{console.log(element)})


