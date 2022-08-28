import React from 'react'; 
import Lightswitch from '../Lightswitch/Lightswitch';
import classes from './Header.module.scss';

function Header() {

    return (
        <header className={classes.blockHeader}>
            <div className="container">
                <Lightswitch />
            </div> 
        </header>
    )
}

export default Header