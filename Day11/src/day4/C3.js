import {useDispatch} from "react-redux"
export default function C3()
{
    let dispatcher = useDispatch()
    let count =0
    return(
        <button onClick={
            ()=>{ dispatcher({type:"PUSH",data:`City ${++count}`})}
        }>OK</button>
    )
}