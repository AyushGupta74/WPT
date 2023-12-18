import {useSelector} from "react-redux"
import "../day2/ex1.css"

export default function DecrC2()
{
    let c = useSelector((state)=>{return state.counter})




    return(
        <p className="inner">Counter : {c}</p>
    )
}