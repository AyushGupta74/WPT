import Parent from "./Parent";
import {Provider} from "react-redux"
import mystore from "./mystore";
import IncrC1 from "./IncrC1";
import DecrC2 from "./DecrC2";
import C3 from "./C3";
import RefEx from "./RefEx";

//import React, { useRef } from 'react';
export default function App3()
{
  return(
    // <RefEx></RefEx>
    <Parent></Parent> 
    // <Provider store={mystore}>
    
    // <IncrC1></IncrC1>
    // <DecrC2></DecrC2>
    // <C3 style={{border:"3px solid black",margin:"10px"}}></C3>
    // </Provider>
  )
}














// const myRef = useRef(null);
//   function handler()
//   {
//     console.log(myRef.current.value)
//   }

//   return (
//     <div>
//       <input type="text" ref={myRef}></input>
//       <input type="button" onClick={handler} />
//     </div>
//   );
