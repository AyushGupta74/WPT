import axios from "axios";
import React from "react";

export default class AjaxCEx extends React.Component
{
    constructor()
    {
        super()
        this.state={arr:[],selectedobj:null}
    }

    componentDidMount()
    {
        let promise=axios.get("https://reqres.in/api/users?page=2")
        promise.then((res)=>{
            this.setState({arr:res.data.data})
        })

    }

    getoptions=()=>{
        return this.state.arr.map((element)=>{
     return <option key={element.id} value={element.id} >{element.first_name}</option>
        })
    }

   handler=(e)=>{
      let selectedId = e.target.value
      let obj =this.state.arr.find((ele)=>{
            if(ele.id == selectedId)
            return true;
            else
             return false;
      })
      console.log(obj)
      this.setState({selectedobj:obj})
  }//end of handler



    render()
    {
        return(
            <div>
                <select onChange={this.handler}>
                    {this.getoptions()}
                </select>
            
               <p>ID : {this.state.selectedobj?.id}</p>
               <p>Email :{this.state.selectedobj?.email} </p>

            </div>
        )
    }


}