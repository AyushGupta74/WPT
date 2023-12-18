import "../day2/ex1.css"
export default function Child(props)
{
    let data = "INITIALVAL"
    return(
        <div className="inner">
            Enter Array Element :<input 
                            type="text"
                            onBlur={(e)=>{
                                data= e.target.value
                            }} />
            <input className="btn btn-success" type="button" 
                   value="add to array"
                   onClick={()=>{
                      props.add(data)
                   }} />
        </div>
    )
}