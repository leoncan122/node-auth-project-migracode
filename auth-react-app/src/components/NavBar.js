import React, { useState, useContext } from 'react';
import './NavBarstyles.css'

import {MenuContext} from '../context/UserContext'

function NavBar () {
    const {menuActive, setMenuActive} = useContext(MenuContext)

    function activeMenu ()  {
        !menuActive ? 
        setMenuActive(true) :
        setMenuActive(false)
    }
    return(
        <div className='nav'>
            <button onClick={activeMenu}>More</button>
        </div>
    )
}
export default NavBar;