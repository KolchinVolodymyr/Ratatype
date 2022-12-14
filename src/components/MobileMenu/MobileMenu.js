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
            <ul onClick={() => props.handleLinkSubMenu()}>
                <li className={splitLocation[1] === "trainer" ? `${classes.active}` : ""}>
                    <Link to='/trainer'>Тренажер</Link>
                </li>
                <li className={splitLocation[1] === "" ? `${classes.active}` : ""}>
                    <Link to='/'>Тест</Link>
                </li>
                <li className={splitLocation[1] === "education" ? `${classes.active}` : ""}>
                    <Link to="/education">Навчання</Link>
                </li>
                <li>
                    <div className={classes.submenu}>
                        <ul>
                            <li>
                                <Link to="/education">Для вчителів</Link>
                            </li>
                            <li>
                                <Link to="/education">Про нас</Link>
                            </li>
                            <li>
                                <Link to="/education">Рейтинг</Link>
                            </li>
                            <li>
                                <Link to="/education">Допомога</Link>
                            </li>
                            <li>
                                <Link to="/education">Контакти</Link>
                            </li>
                            <li>
                                <Link to="/education">Підтримати проєкт</Link>
                            </li>
                        </ul>
                        <div className={classes.accounMobile}>
                            <img src={'./assets/user.png'} alt="user"/>
                            <div className={classes.info}>
                                <div className={classes.name}>Alex</div> 
                                <div className={classes.rate}><img src={'./assets/gold-coin.png'} alt="gold-coin"/>35 543</div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default MobileMenu