import { useEffect, useState } from "react";
import LifeCycleEx from "./LifeCycleEx";
import LifeCycleFEx from "./LifecycleFex";
import AjaxExF from "./AjaxExF";
import AjaxWithReactF from "./AjaxExF2";
import AjaxCEx from "./AjaxCEx";

export default function App2()
{   let[flag,setflag] = useState(false)
    let[msg,setmsg] = useState("this is a msg")

    useEffect(()=>{
        console.log("App2 mounted")
    },[])


    useEffect(()=>{
        console.log("App2 message updated")
    },[msg])

    useEffect(()=>{
        //console.log("App2 flag updated")
    },[flag])





    return(<>
    <AjaxCEx></AjaxCEx>
    {/* <AjaxWithReactF></AjaxWithReactF> */}
     {/* <AjaxExF></AjaxExF> */}
        {/* <input type="text" onChange={(e)=>{
            setmsg(e.target.value)
        }}/>
        <input type="checkbox" 
        onClick={(e)=>{
            setflag(e.target.checked)
        }}/>
        {/* {flag && <LifeCycleEx msg ={msg}></LifeCycleEx>} */}
       {/* {flag && <LifeCycleFEx msg={msg}></LifeCycleFEx>} */}
        </>
    )
}



