import { useState } from "react"

export default function SayHi()
{
    //let msg = ""
    //let arr = useState("initial val")
    let [msg,setmsg] =useState("") //destructuring array syntax
    function handler()
    {
        //arr[1]("hi")  //CHANGING the state 
        setmsg("hi")
        //console.log("msg",arr[0])
        console.log("msg =",msg)
    }
    return(
        <>
        <input 
           type="button" 
           value="say hi"
           onClick={handler} 
        />
        {/* <p>Msg = {arr[0]}</p> */}
        <p>{msg}</p>
        </>
    )
}