import React from 'react'; 
import classes from './MobileMenu.module.scss';
import {Link, useLocation} from 'react-router-dom';

function MobileMenu(props) {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (
        <nav className={classes.menuMobile}>
            <ul>
                <li className={splitLocation[1] === "trainer" ? `${classes.active}` : ""}>
                    <Link to='/trainer'>Тренажер</Link>
                </li>
                <li className={splitLocation[1] === "" ? `${classes.active}` : ""}>
                    <Link to='/'>Тест</Link>
                </li>
                <li className={splitLocation[1] === "education" ? `${classes.active}` : ""}>
                    <Link to="/education">Навчання</Link>
                </li>
                 
            </ul>
        </nav>
    )
}

export default MobileMenu