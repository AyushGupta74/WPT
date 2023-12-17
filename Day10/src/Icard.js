export default function ICard(props)
{
   let {name,dob,phone} = props.obj
    let styleobj = {border:"3px groove blue",width:"300px",backgroundColor:"yellow"}

    return(
        <div style={styleobj}>
            <p>Name :{name}</p>
            <p>Dob :{dob}</p>
            <p>phone :{phone}</p>
        </div>
    )
}