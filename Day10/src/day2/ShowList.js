import { useState } from "react"

export default function ShowList()
{
    let[tableflag,settable] = useState(false)
    let[olflag,setol] = useState(false)
    let[ulflag,setul] = useState(false)
    let arr=["red","green","blue","yellow","pink","purple","white","black"]

    let [arr2,setarr2] = useState([])    
    
    function handler(choice)
    {

        
        switch(choice)
        {
            case "table" :{
                settable(true)
                let arr2 =arr.map((element,index)=>{
                    return <tr><td>{index}</td><td>{element}</td></tr>
             })
                setarr2(arr2)
                break;
            }
            case "ol":{
                setol(true)
                let arr2 = arr.map((element)=>{
                    return <li>{element}</li>
             })
             setarr2(arr2)
             break;
            }
            case "ul" :{
                setul(true)
                let arr2 = arr.map((element)=>{
                    return <li>{element}</li>
             })
             setarr2(arr2)
             break;
            } 
            default :break;
        }
    }


    return(
        <>
        Table Format:<input type="radio" name="format" onClick={()=>{ handler("table")}}/>
        Ol format : <input type="radio" name="format" onClick={()=>{ handler("ol")}}/>
        UL format :<input type="radio" name="format"onClick={()=>{ handler("ul")}}/>

        {tableflag && <table border="1">{arr2}</table>}
        {olflag && <ol>{arr2}</ol>}
        {ulflag && <ul>{arr2}</ul>}
        
        </>
    )


}