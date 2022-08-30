import React from 'react'; 
import Lightswitch from '../Lightswitch/Lightswitch';
import classes from './Header.module.scss';

function Header(props) {
    
    return (
        <header className={classes.blockHeader}>
            <div className="container">
                <Lightswitch handleClickRestart={props.handleClickRestart}/>
            </div> 
        </header>
    )
}

export default Header