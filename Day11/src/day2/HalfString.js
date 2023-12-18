import React from "react";
import "./ex1.css";

export default class HalfString extends React.Component
{
    constructor()
    {
        super()
        this.state={half:"not yet computed"}
        //this.handler = this.handler.bind(this)
    }

    handler=(event)=>{
        let s =event.target.value
        let shalf = s.substring(0,s.length/2).toUpperCase()
        this.setState({half:shalf})
    
    }


    // handler(event)
    // {
    //     console.log(event.target.value)
    //     this.setState({half:event.target.value})
    // }

    render()
    {
        return (
            <div className="inner">
                Enter String : <input 
                                type="text"
                                onBlur={this.handler} />
                <p>Half String = {this.state.half}</p>
            </div>
        )
    }
}