import React from 'react'
import { Link } from 'gatsby'
import Hamburger from './Hamburger';

export default function Navbar() {
    var currentlyDark = false;

    function OnLightClick() {
        if(!currentlyDark)
        {
            //Dark Styling
            document.body.style.backgroundColor = "#111111";
            document.body.style.color = "white";
            console.log("Going dark!");
            if(document.getElementById("Footer") != null) {
                document.getElementById("Footer").style.backgroundColor = "black";
                document.getElementById("Footer").style.color = "white !important";
            }
            changeBackground(true);
            currentlyDark = true;
        }else{
            //Light Styling
            document.body.style.background = "#fffdfa";
            document.body.style.color = "black";
            //document.getElementById("Footer").style.background = "#f6f4f5";
            console.log("Going light!");
            changeBackground(false);
            currentlyDark = false;
        }

    }
    function changeBackground(active)
    {
        var header = document.getElementById("Header");
        var title = document.getElementById("Title");
        var titleText = document.getElementById("Title_Text");
        var lightSwitch = document.getElementById("LightSwitch");
        var navContainer = document.getElementById("Nav_Container");
        var hamburger = document.getElementById("Hamburger");
        var nav = document.getElementById("Nav");
        var services = document.getElementById("Services");
        var industries = document.getElementById("Industries")
        var about = document.getElementById("About");
        var people = document.getElementById("People");
        if(active)
        {
        //Is currently white. Please switch.
        header.className = "HeaderDark";
        title.className = "TitleDark";
        titleText.className = "Title_TextDark"
        lightSwitch.className = "LightSwitcDark";
        navContainer.className = "Nav_ContainerDark";
        hamburger.className = "HamburgerDark fa fa-bars";
        nav.className = "NavDark";
        services.className = "ServicesDark";
        industries.className = "IndustriesDark";
        about.className = "AboutDark";
        people.className = "PeopleDark";
        active = false;

        } else {
        //Is currently black. Please switch.
        header.className = "";
        title.className = "";
        titleText.className = ""
        lightSwitch.className = "";
        navContainer.className = "";
        hamburger.className = "fa fa-bars";
        nav.className = "";
        services.className = "";
        industries.className = "";
        about.className = "";
        people.className = "";
        active = true;
        }
    }

    return (
        <div id="Header">
            <Link to="/" id="top"></Link>
            <Link to="/"><img src="https://www.nelgara.com.au/img/logo.png" id="Logo" alt="logo.png"></img></Link>
            <span onClick={OnLightClick} id="LightSwitch" className=""><span className="fas fa-lightbulb"></span></span>
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
