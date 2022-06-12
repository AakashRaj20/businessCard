import React from "react";
import Email from "../images/Icon.png";
import Lk from "../images/Vector.png";



export default function Buttons(){
    return (
        <div className="btn">

            <button type="button" className="e--btn"><img src={Email} alt="icon" className="btn--icon"></img>Email</button>
            <button type="button" className="l--btn"><img src={Lk} alt="icon" className="btn--icon"></img>Linkedin</button>

        </div>
    )
}