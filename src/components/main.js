import React from "react";
import Name from '../components/name';
import Buttons from '../components/buttons';
import About from '../components/about';
import Intrests from '../components/intrests';


export default function main() {

    return (
        <main className="main--box">
             <Name />
             <Buttons />
             <About />
             <Intrests />
        </main>
    )

}