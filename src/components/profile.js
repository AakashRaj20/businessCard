import React from "react";
import logo from "../images/logo.png";

export default function ProfileIcon(){
    return (
        <div className="profile--pic">

            <img src={logo} alt="profile" className="profile--icon"></img>

        </div>
    )
}