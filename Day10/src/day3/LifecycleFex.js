import { useEffect } from "react";


export default function LifeCycleFEx(props)
{
    useEffect(()=>{
        console.log("LifeCycleF this is called on mounting only")

        return ()=>{console.log(" LifeCycleF  this is called on unmounting")}

    },[])

    useEffect(()=>{
        console.log("props message changed LifeCycleF ",props.msg)
    },[props.msg])



}
