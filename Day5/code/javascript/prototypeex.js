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
/*

Date.prototype.prachismonth= function(d)
{
    switch(d)
    {
        case 1 : return "JAN"; break;
        case 2 : return "FEB"; break;
        case 3 : return "MAR"; break;
        case 4 : return "APR"; break;
        case 5 : return "MAY"; break;
        case 6 : return "JUN"; break;
        case 7 : return "JUL"; break;
        case 8 : return "AUG"; break;
        case 9 : return "SEP"; break;
        case 10 : return "OCT"; break;
        case 11: return "NOV"; break;
        case 12 : return "DEC"; break;
        default : return "" ; break;
        
    }
} 

var d = new Date(2022,3,27)
var c =d.getDate()
var w = d.getMonth()
console.log(d.prachismonth(w+1)) //Object.getPrototypeOf(d))
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





 