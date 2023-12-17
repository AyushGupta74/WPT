import axios from "axios"
import { useState } from "react"

export default function AjaxWithReactF()
{
    let [arr,setarr] = useState([])
    function rows()
    {
       return arr.map((employee)=>{ return( 
          <tr><td>
            {employee.first_name.concat(" ",employee.last_name)}
         </td>
         <td>{employee.email}</td>
         <td><img alt="" src={employee.avatar} width="50" height="50" ></img></td>
         </tr>)})
    }
    function handler()
    {
        let promise=axios.get("https://reqres.in/api/users?page=2")
        promise.then((res)=>{
            setarr(res.data.data)
        })
    }

    return (<div>
        <input type="button" value="getdata" 
        onClick={handler}/>
        <table border="1">
            <thead>
                <tr><th>Name</th><td>Email</td><td>Photo</td></tr>
            </thead>
            <tbody>
                {rows()}
            </tbody>

        </table>
    </div>)
}