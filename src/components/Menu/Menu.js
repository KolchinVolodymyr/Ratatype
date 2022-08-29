import React from 'react'; 
import classes from './Menu.module.scss';
import {Link, useLocation} from 'react-router-dom';

function Menu(props) {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (
        <nav className={props.darkMode ? `${classes.menuDesktop} ${classes.menuDesktopDark}` : `${classes.menuDesktop} ${classes.menuDesktoplight}`}>
            <ul>
                {/* Checking the current path name using javascript ternary operator and if true adding active classname to it */}
                <li className={splitLocation[1] === "" ? `${classes.active}` : ""}>
                    <Link to='/'>Тест</Link>
                </li>
                <li className={splitLocation[1] === "trainer" ? `${classes.active}` : ""}>
                    <Link to='/trainer'>Тренажер</Link>
                </li>
                <li className={splitLocation[1] === "education" ? `${classes.active}` : ""}>
                    <Link to="/education">Навчання</Link>
                </li>
                <li className={splitLocation[1] === "more" ? `${classes.active}` : ""}>
                    <Link to="/more">Більше</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu