import React from 'react'; 
import classes from './Menu.module.scss';
import {Link, useLocation} from 'react-router-dom';

function Menu() {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (
        <nav className={classes.menuDesktop}>
            <ul>
                {/* Checking the current path name using javascript ternary operator and if true adding active classname to it */}
                <li className={splitLocation[1] === "" ? "active" : ""}>
                    <Link to='/'>Home</Link>
                </li>
                <li className={splitLocation[1] === "about" ? "active" : ""}>
                    <Link to='/about'>About</Link>
                </li>
                <li className={splitLocation[1] === "service" ? "active" : ""}>
                    <Link to="/service">Service</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu