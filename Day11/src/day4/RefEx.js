import {useRef,useState} from "react"
export default function RefEx()
{
    let count =0
    let cntref = useRef(0)
    let textref = useRef("This is the ref")
    let [c,setc] =useState(0)
     //let d
    return(    <>
        <p>count = {++count}</p>
        <p>cntref={++cntref.current}</p>
        <p>c state = {c}</p>
        {/* <input type="text" onBlur={(e)=>{
            d=e.target.value
        }} /> */}
        <input type="text" ref={textref} />
         <button onClick={()=>{
             //setc(++c)
             cntref.current++
             console.log(cntref.current)
             //console.log(d)
             console.log(textref.current.value)
         }}>OK</button>
         <button onClick={()=>{
            let t = textref.current.value
            textref.current.value=t.toUpperCase()
            textref.current.readOnly=true
         }}>Make ReadOnly</button>
         <button onClick={()=>{
            textref.current.readOnly=false
         }}>Make Editable</button>
        </>
    )




}