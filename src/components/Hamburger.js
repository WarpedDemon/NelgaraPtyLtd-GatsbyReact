import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Hamburger() {

    var menuVisible = false;

    function HideMenu(menu) {
        menu.classList.add("animated");
        menu.classList.add("fadeOutUp");
        setTimeout(()=> {
            menu.style.display = "none";
        }, 500);
        menuVisible = false;
    }
      
    function DisplayMenu(menu)
    {
        menu.classList.remove("animated");
        menu.classList.remove("fadeOutUp");
        menu.style.display = "block";
        menu.style.zIndex = 1000;
        menu.classList.add("animated");
        menu.classList.add("fadeInDown");
        menuVisible = true;
    }

    function ToggleMenu() {
        var menu = document.getElementById("Nav");
        if(!menuVisible) {
            DisplayMenu(menu)
        } else { HideMenu(menu); }
    }

    return (
        <div onKeyDown={ToggleMenu} onClick={ToggleMenu} tabIndex={-1} role="button" aria-label="Navigation drop down button">
            <GiHamburgerMenu id="Hamburger"></GiHamburgerMenu>
        </div>
    )
}
