import React from "react";
import Facebook from "../images/fbLogo.png";
import Twitter from "../images/TwtLogo.png";
import Instagram from "../images/IgLogo.png";
import GitHub from "../images/GHLogo.png"

export default function Footer(){
    return (
        <footer>

            <img src={Twitter} alt="twitter" className="icon--style"></img>
            <img src={Facebook} alt="facebook" className="icon--style"></img>
            <img src={Instagram} alt="instagram" className="icon--style"></img>
            <img src={GitHub} alt="github" className="icon--style"></img>
           

        </footer>
    )
}