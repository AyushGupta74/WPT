//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
let obj = {name:'prachi',city:'pune' }
/*
//chaining observation
 do
{
    console.log(obj)
    obj = Object.getPrototypeOf(obj);
    
}while(obj) 
*/
let pro = {age:45,qualification:'ME'}
Object.setPrototypeOf(obj,pro ) //Object.create(pro))
console.log(obj.name,obj.city,obj.age,obj.qualification)

//an object somePrototype, which has a greet() method
const somePrototype = {
    time:"morning",
    greet() {
      console.log(`hello, my name is ${this.name}!`);
    }
  }
  
  //a Person constructor function that initializes the name proeprty
  function Person(name) {
    this.name = name;
    //this.time = "afternoon"

    this.showName=function()
    {
        console.log("show name called", this.time)
    }
  }
  
  Person.prototype = somePrototype;
/* 
  The last line (Person.prototype.constructor = Person;) sets the prototype's constructor property to the function used to create Person objects. This is required because after setting Person.prototype = personPrototype; the property points to the constructor for the personPrototype, which is Object rather than Person (because personPrototype was constructed as an object literal). */
/* So if we set the prototype of a constructor, we can ensure that all objects created with that constructor are given that prototype: */
 // Person.prototype.constructor = Person;

  let reuben = new Person('Reuben');
  reuben.greet(); // hello, my name is Reuben!
  reuben.showName();

  do
  {
      console.log(reuben)
    reuben = Object.getPrototypeOf(reuben)
    
  }while(reuben)



  //In JavaScript, all functions have a property named prototype. When you call a function as a constructor, this property is set as the prototype of the newly constructed object (by convention, in the property named __proto__).
  /* It's common to see this pattern, in which methods are defined on the prototype, but data properties are defined in the constructor. That's because methods are usually the same for every object we create, while we often want each object to have its own value for its data properties */

  /*
  const irma = new Person('Irma');

console.log(Object.hasOwn(irma, 'name')); // true
console.log(Object.hasOwn(irma, 'greet')); // false

*/
/* Prototypes are a powerful and very flexible feature of JavaScript, making it possible to reuse code and combine objects. */
