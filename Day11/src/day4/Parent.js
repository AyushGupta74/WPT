import Child from "./Child"
import {useState} from "react"

export default function Parent()
{
    let [arr,setarr] = useState(["Pune","Mumbai"])

    function addToArray(element)
    {
        console.log("addToArray of Parent called",element)
        //arr.push(element)
        //console.log("arr",arr)
    setarr([...arr,element])//spread operator must be used when setting obj state
    console.log("element added",arr)
    }

    return(
        <div>
            <ol>
                {arr.map((e,index)=>{
                    return <li key={index}>{e}</li>
                })}
            </ol>
            <Child add={addToArray}></Child>
        </div>
    )

}