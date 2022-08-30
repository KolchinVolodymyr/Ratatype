import React, {useContext} from 'react'; 
import classes from './Footer.module.scss';
import Lightswitch from '../Lightswitch/Lightswitch';
import {DarkModeContext} from '../../context/DarkModeContext';

function Footer(props) {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const handleClick = () => {
        toggleDarkMode();
    }
    return (
        <footer className={classes.blockFooter}>
            <div className="container">
                <div className='row'>
                    <div className="col-12">
                        <div className={classes.actionUserFooter}>
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
                        </div>
                    </div> 
                </div>
            </div> 
        </footer>
    )
}

export default Footer