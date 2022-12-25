//'use client'   // tell the compiler to use the client version of the module
import React from "react";
// import { motion } from "framer-motion";



export default function About() {

    return (
        <div className="about">
                <h1 className="text-3xl text-right">Byron Dalberg</h1>
                <h2 className="text-2xl text-right">Web Developer</h2>
            <div>
                <p className="p-3 text-center">
                    Welcome to my about page. I'll run it down quickly. /n
                </p>
                <p className="p-3 text-center">
                    I'm a web developer with a passion for learning and creating.
                    I'm currently working on a few projects, including this portfolio site.
                    Other projects im working on are...
                </p>
                <ul className="grid grid-cols-3 gap-3">
                    <li>Homewoods Management
                        <p className="grid-row">A Vermont Based Tree Cutting Service</p>
                        <p>
                        <button className="bg-green-200 p-1 rounded-sm m-1">Github</button><button className="bg-blue-200 p-1 rounded-sm m-1">Deployed</button>
                        </p>
                    </li>
                    <li>RUST based neural networks - Because I like to future proof my projects
                    <p>
                        <button className="bg-green-200 p-1 rounded-sm m-1">Github</button><button className="bg-blue-200 p-1 rounded-sm m-1">Examples</button>
                        </p>
                    </li>
                    <li>And a few others that I'm not ready to talk about yet    
                    </li>
                </ul>
                <div>
                    <p className="p-3 text-center">Future Developement</p>
                </div>
            </div>
        </div>
    );
}