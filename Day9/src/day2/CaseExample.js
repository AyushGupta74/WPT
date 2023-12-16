import React from "react";

export default class CaseExample extends React.Component
{

    constructor()
    {
        super()
        this.state={str:"",rev:"",original:""}
    }

    radioHandler=(event)=>{

        switch(event.target.id)
        {
            case "uc" : {
                let s = this.state.str
                let s1 = s.toUpperCase()
                this.setState({str:s1})
                break;
            }

            case "lc" :{
                let s = this.state.str
                let s1 = s.toLowerCase()
                this.setState({str:s1})
                break
            }
            case "tc" :{
                let s = this.state.str
                let s1 = s.charAt(0).toUpperCase()
                let s2 = s.substring(1).toLowerCase()
                this.setState({str:s1+s2})
            }

            default :break;
        }

    }




    revHandler=(event)=>{

            let isChecked = event.target.checked
            if(isChecked)
            {
                let s =this.state.str
                let rev =""
                for(let i=s.length-1;i>=0;i--)
                {
                    rev+=s.charAt(i)
                }
                console.log("rev",rev)
                this.setState({str:rev,rev:rev})

            }
            else{
                this.setState({str:this.state.original})
            }
    }


    render()
    {
        return(
            <div>
                <h4>Reverse Case Example </h4>
                Enter string :<input type="text"
                onBlur={
                    (event)=>{ 
                        console.log(event.target.value)
                        this.setState({original:event.target.value,str:event.target.value})
                    }
                    } />
                <br></br>
                Reverse :<input type="checkbox" 
                onClick={this.revHandler} />
                <br></br>
                UC : <input type="radio" id="uc" name="case" onClick={this.radioHandler}/>
                <br></br>
                LC : <input type="radio" id="lc" name="case"onClick={this.radioHandler}/>
                <br></br>
                TC : <input type="radio" id="tc" name="case"onClick={this.radioHandler}/>
                <p>Output = {this.state.str} </p>
            </div>
        )
    }

}