import React from "react";
import EduDetails from "./EduDetails";

export default class StudentData extends React.Component
{    constructor()
    {
        super()
        this.state={flag:false}
    }
    render()
    {        return(
            <div>
                <p>Name :  Shruti 
                   </p><p>Dob : 12-Mar-2020
                </p>
                <p>email: shruti @ abcd.com</p>
                Edu Details :<input type="checkbox" 
                            onClick={(e)=>{
                                this.setState({flag:e.target.checked})

                            }}
                            />
              {/* {this.state.flag?<EduDetails></EduDetails>:"" } */}
             {this.state.flag && <EduDetails></EduDetails>}

            </div>
        )
    }
}



