import React, {useContext, useState} from 'react';
import {DarkModeContext} from '../../context/DarkModeContext';
import Menu from '../Menu/Menu';
import MobileMenu from '../MobileMenu/MobileMenu';
import classes from './Lightswitch.module.scss';

function Lightswitch(props) {

    const [enableMobileMenu, setEnableMenu] = useState(false);
    const mobileMenu = () => {
        setEnableMenu(!enableMobileMenu)   
        if(enableMobileMenu) {
            document.body.classList.remove('background_mobile_menu');
        } else {
            document.body.classList.add('background_mobile_menu');
        }
        
    }

    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const handleClick = () => {
        toggleDarkMode();
    }

    const handleLinkSubMenu = () => {
        setEnableMenu(!enableMobileMenu);
        if(enableMobileMenu) {
            document.body.classList.remove('background_mobile_menu');
        } else {
            document.body.classList.add('background_mobile_menu');
        }
    }

    return (
        <div className="row">
            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-9 col-9">
                {enableMobileMenu 
                ? <>
                    <img className={classes.logo_table_hide} src={darkMode ? `./assets/logo-dark.png` : `./assets/logo-dark.png`} alt="logo table"/>
                    <img className={classes.logo_mobile} src={darkMode ? `./assets/logo-mob-light.png` : `./assets/logo-mob-light.png`} alt="logo mobile"/>
                  </>
                : <>
                    <img className={classes.logo_table_hide} src={darkMode ? `./assets/logo-dark.png` : `./assets/logo-light.png`} alt="logo table"/>
                    <img className={classes.logo_mobile} src={darkMode ? `./assets/logo-mob-light.png` : `./assets/logo-mob.png`} alt="logo mobile"/>
                  </>}
            </div>
            <div className='col-xl-5 col-lg-6 col-md-6 col-sm-1 col-1'>
                <Menu 
                    darkMode={darkMode}
                />
            </div>
            <div className="col-xl-2 offset-xl-3 col-lg-3 col-md-3 col-sm-2 col-2">
                <div className={classes.actionUser}>
                    <div className={classes.restartIcon}>
                        <img src={'./assets/restart.png'} 
                            alt="restart icon"
                            onClick={() => props.handleClickRestart()}
                        />
                    </div>
                    <div className={classes.toogleIcon}>
                        <img src={darkMode ? `./assets/light-mode.png` : `./assets/dark-mode.png`} 
                            alt="Lightswitch on" 
                            onClick={handleClick}
                        />
                    </div>
                    <div className={classes.userIcon}>
                        <img src={'./assets/user.png'} alt="user"/>
                    </div>
                    {enableMobileMenu 
                        ? <>
                            <img className={classes.burgerMenuTabled} src={'./assets/burger-menu-light.png'} alt="logo mobile" onClick={mobileMenu}/>
                            <img className={classes.burgerMenuMobile} src={'./assets/burger-menu-close.png'} alt="logo mobile close" onClick={mobileMenu}/>
                        </>
                        : <img className={classes.menuMobile} src={darkMode ? `./assets/burger-menu-light.png` : `./assets/burgermenu.png`} 
                            alt="mobile menu"
                            onClick={mobileMenu}/>
                        }
                    
                </div>
            </div>
            {enableMobileMenu && <MobileMenu handleLinkSubMenu={handleLinkSubMenu}/>}
        </div>
    )
}

// Light Switch design by Jeremy Loyd, US - Public Domain
export default Lightswitch
