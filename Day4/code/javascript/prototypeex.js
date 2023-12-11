/*
function Student(r,n,d){
    this.roll = r
    this.name = n
    this.dob = d

    /*
    this.test =function()
    {
        console.log("doing something")
    }*/
//}
/*
Student.prototype.getDetails = function(){
    return this.name+" "+this.dob+" "+this.roll
}

var s1 = new Student(11,'p','2022-11-12')
var s2 = new Student(12,'kkk','2022-11-13')
console.log(s1.getDetails(),Object.getPrototypeOf(s1))
console.log(s2.getDetails(),Object.getPrototypeOf(s2))

if(Object.getPrototypeOf(s1) == Object.getPrototypeOf(s2))
     console.log("same location of prototype of s1 and s2")
    else 
console.log("different location of prototype of s1 and s2")

console.log(s1)
console.log(s2)


*/

let obj = {name:'prachi',city:'pune' }
let pro = {age:45,qualification:'ME'}
let pro2 = {hobby:'xyz'}
//EXPLICTLY doing PROTOTYPE CHAINING --------------
Object.setPrototypeOf(obj,pro)
Object.setPrototypeOf(pro,pro2)

console.log(
    Object.getPrototypeOf(obj),
    Object.getPrototypeOf(pro),
    Object.getPrototypeOf(pro2))
console.log(obj.city,obj.hobby ,obj.qualification,obj.name)





 