import React from "react"
import "./ex1.css"

export default class Hello extends React.Component
{
    render()
    {
        return(
            <div className="outline">
            <div className="inner">
            <p 
            style={{backgroundColor:this.props.col}}
            >
            Hello {this.props.name}
            </p>
            </div>
            <div class="inner">
                This is second div
            </div>
            </div>
        )
    }
}