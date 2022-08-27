import React, {useContext} from 'react';
import Header from '../Header/header';
import {DarkModeContext} from '../../context/DarkModeContext';

function Container() {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <div className={darkMode ? `wrap wrap-dark` : `wrap wrap-light`}>
            <Header />
        </div>
    )
}

export default Container