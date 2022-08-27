import React, {useContext} from 'react';
import {DarkModeContext} from '../../context/DarkModeContext';

function Lightswitch() {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const handleClick = () => {
        toggleDarkMode();
    }
    return (
        <div className="row">
            <div className="col-xl-4">
                <img src={darkMode ? `./assets/logo-dark.png` : `./assets/logo-light.png`} alt="Logo"/>
            </div>
            <div className="col-xl-4 offset-xl-4">
                <img src={'./assets/restart.png'} alt="restart icon"/>
                <img src={darkMode ? `./assets/light-mode.png` : `./assets/dark-mode.png`} 
                    alt="Lightswitch on" 
                    onClick={handleClick}
                />
                <img src={'./assets/user.png'} alt="user"/>
            </div>
        </div>
    )
}

// Light Switch design by Jeremy Loyd, US - Public Domain
export default Lightswitch
