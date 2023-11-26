import './style.css'
import React from "react";
import { Link } from "react-router-dom";


function Navber(){
    return (
        <>
            <div id='hederfoter'>
            <div id='opacity'>
                {/* this is opacity */}
            </div>
            <div id='navber'>
                
                <div className="text-green-600 " id="nav">
                <div id='navItem0' >
                 <Link to="/" >Home</Link>
                </div>
                <div id='navItem1' >
                  <Link to="/about"> About</Link>
                </div>
                <div id='navItem2' >
                <Link to="/conteac"> Contact Me</Link>
                </div>
                <div id='navItem3' >
                <Link to="/protfoli">Protfoli</Link>
                </div>
            </div>
            <div id='logo'>
                     <p>
                        logo
                    </p>
            </div>
               
            </div>
            </div>

        </>
    )
}

export default Navber