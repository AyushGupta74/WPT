import Maths from "./maths";
import Welcome, { Greeting } from "./welcome";
import Total from "./total";
import ICard from "./Icard";

//Functional React Component
function App() {

  //x is a JSX object 
  let x =  <p>Hello</p>
  console.log("type of x ",typeof(x))
  
  let arr = [12,13,10,20]
  let obj = {name:"priti",dob:"1-1-2000",phone:"1233455"} 

  return (
    <>
    <p>Hello</p>
    <ICard obj={obj}></ICard>
   <Welcome></Welcome>
   <Greeting></Greeting>
   <Total nums={arr}></Total>
   <Maths num1={30} num2={1.4} op={"*"}></Maths>
   <Maths num1={30} num2={100} op={"*"}></Maths>
   <Maths num1={1.9} num2={1.4} op={"-"}></Maths>
   <Maths num1={300} num2={3} op={"/"}></Maths>
   </>
  );
}

export default App;



