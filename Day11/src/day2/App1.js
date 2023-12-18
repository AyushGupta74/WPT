import { useState } from "react";
import Hello from "./Hello";
import StudentData from "./StudentData";
import ShowList from "./ShowList";
//import CaseExample from "./CaseExample"
//import HalfString from "./HalfString"
//import ShowMonthName from "./ShowMonthName"
//import SayHi from "./sayHi"
export default function App1()
{
    let [col,setcol] = useState("red")
    function handler(event)
    {
        console.log(event.target.value)
        setcol(event.target.value)
    }


    return(
        <>
        <ShowList></ShowList>
        {/* <StudentData></StudentData>  */}
        {/* <CaseExample></CaseExample> */}
        {/* <HalfString></HalfString> */}
        {/* <ShowMonthName></ShowMonthName> */}
        
        {/* Enter Color:<input type="color" onChange={handler} />
        <Hello name={"prachi"} col={col}></Hello>  */}
        {/* <SayHi></SayHi> */}
        </>
    )
}



