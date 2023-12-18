import React from "react";

export default class LifeCycleEx extends React.Component
{
    componentDidMount(){
        console.log("life cycle component mounted")
    }

    componentDidUpdate(){
        console.log("Life cycle componet updated")
    }

    componentWillUnmount()
    {
        console.log("lifecycle component unmounted")
    }

   render()
   {
    return (
        <>
        <p>LifeCycleEx Component....</p>
        <p>{this.props.msg}</p>
        </>
    )
   }

}