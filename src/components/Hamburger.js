import React from 'react'

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
        <span id="Hamburger" className="fa fa-bars" onClick={ToggleMenu}></span>
    )
}
