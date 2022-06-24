import React from 'react'
import { Link } from 'gatsby'
import Hamburger from './Hamburger'
import {BsLightbulbFill} from 'react-icons/bs'

export default function Navbar() {

    function OnLightClick() {
      if (typeof window !== 'undefined') {
        console.log("Running light switch!");
        var curTheme = document.documentElement.getAttribute('data-theme');
        if(curTheme != null) {
          if(curTheme === "light") { 
            document.documentElement.setAttribute('data-theme', "dark"); 
            localStorage.setItem("theme", "dark"); 
          } else {
            document.documentElement.setAttribute('data-theme', "light");
            localStorage.setItem("theme", "light");
          }
        } else {
          document.documentElement.setAttribute('data-theme', "dark"); 
          localStorage.setItem("theme", "dark");
        }
      }
    }

    return (
        <div id="Header">
            <Link to="/"><img src="https://www.nelgara.com.au/img/logo.png" id="Logo" alt="logo.png"></img></Link>
            <span role="button" tabIndex={-2} aria-label="Light switch" onKeyDown={OnLightClick} onClick={OnLightClick} id="LightSwitch" className=""><BsLightbulbFill></BsLightbulbFill></span>
            <h2 id="Title" className=""><Link to="/" id="Title_Text" className=""> Nelgara Pty Ltd </Link></h2>
            <div id="Nav_Container" className="">
                <Hamburger />
            </div>
            <ul id="Nav">
                <Link to="https://www.nelgara.com.au/services" id="Services"><li className="animate fadeInLeft wow" data-wow-delay="0.25s"><b><p>Services</p></b></li></Link>
                <Link to="https://www.nelgara.com.au/industries" id="Industries"><li className="animate fadeInLeft wow" data-wow-delay="0.50s"><b><p>Industries</p></b></li></Link>
                <Link to="https://www.nelgara.com.au/contactus" id="About"><li className="animate fadeInLeft wow" data-wow-delay="0.75s"><b><p>Contact Us</p></b></li></Link>
                <Link to="https://www.nelgara.com.au/people" id="People"><li className="animate fadeInLeft wow" data-wow-delay="1s"><b><p>People</p></b></li></Link>
            </ul>
        </div>
    )
}
