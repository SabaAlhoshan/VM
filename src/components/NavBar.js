import React from "react";
import { Link } from "react-router-dom";
function NavBar() {

    return(
        <div className='navbar'>
<div className='navbar-logo'>
hhhheeeelooooo 


</div>
<button > <Link to="/Fingerprint"> cliclk meee </Link></button>
 <ul className='navbar-menu'>
    <li> <a href="/">Home</a></li>

    <li><Link to="/About"> About</Link></li>

    <li><Link to="/Contact"> contact </Link></li>
 </ul>


        </div>
    )
}

export default NavBar