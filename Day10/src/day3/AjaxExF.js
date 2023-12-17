import axios from "axios"
import { useState } from "react"
export default function AjaxExF()
{
    let [firstname,setfname]=useState("")
    let[lastname,setlname] = useState("")
    let [avatar,setimg]=useState("")
    function handler()
    {
        let promise =axios.get("https://reqres.in/api/users/2")
        promise.then((response)=>{
                console.log(response)
                setfname(response.data.data.first_name)
                setlname(response.data.data.last_name)
                setimg(response.data.data.avatar)


        },(reject)=>{
            console.log("something wrong",reject)
        })
        // promise.catch((reject)=>{
        //         console.log("something wrong",reject)
        // })
    }


    return(
        <>
        <h4>Ajax Get </h4>
        <input type="button" value="GET"
               onClick={handler}
               />
        <p>{firstname} {lastname}</p>
        <img src={avatar} width="300px" height={"300px"} alt="not found"></img>
        </>
    )
}