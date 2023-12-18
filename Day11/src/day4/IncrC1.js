import { useSelector,useDispatch } from "react-redux"

export default function IncrC1()
{
    let dispatcher = useDispatch()
    let count = useSelector((state)=>{
        return state.counter
    })

    let arr = useSelector((state)=>{return state.arr})

    function handler()
    {
        //I want to dispatch action to the store
        dispatcher({type:"INCR"})

    }

    return(
        <>
        <ul>
            {arr.map((e,index)=>{
                return <p key={index}>{e}</p>
            })}
        </ul>
        <p>Counter :  {count}</p>
        <input type="button" value="++" 
         onClick={handler}/>
        </>
    )
}