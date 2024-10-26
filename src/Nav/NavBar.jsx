import { Link, NavLink } from "react-router-dom";
import logoblack from '/src/assets/logo-black.png'
import { useState } from "react";
import navCss from './NavBar.module.css';

export default function NavBar(){
    const [menuOpen, setMenuOpen] = useState(false);
   
    return  (<nav>
            
                    <NavLink  to="/CrownBurger"><img src={logoblack} className={navCss.logo} alt="crown logo" /></NavLink>
                    <div className={navCss.menu} onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div id={navCss.menu} className={menuOpen ? "open" : ""}>
                    <NavLink  className={navCss.navLink} to="/CrownBurger">Home</NavLink>
                    <NavLink  className={navCss.navLink} to="menu">Menu</NavLink>
                    <NavLink  className={navCss.navLink} to="about">About Us</NavLink>
                    <NavLink  className={navCss.navLink} to="contact">Contact</NavLink>
                    <NavLink   to="createaccount"><button className={navCss.navButton}>Create Account</button></NavLink>
                    </div>
        </nav>);
}