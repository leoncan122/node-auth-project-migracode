import React, { useState, useContext } from 'react';
import './NavBarstyles.css'

import {MenuContext} from '../context/UserContext';

import Profile from './Profile';
import Requests from './Requests';
import Messages from './Messages';

function NavBar () {
    const {menuActive, setMenuActive, loaded, setLoaded} = useContext(MenuContext)
    
    function activeMenu (loadComponent)  {
        setLoaded(null)

        loaded  === loadComponent ? 
        setLoaded(null)  : setLoaded(loadComponent)  
        
        !menuActive ? 
        setMenuActive(true) :
        setMenuActive(false);

    }
    return(
        <div className='nav'>
            <button onClick={() => activeMenu({Profile})}>Profile</button>
            <button onClick={() => activeMenu({Messages})}>Messages</button>
            <button onClick={() => activeMenu({Requests})}>Requests</button>
            <button onClick={() => activeMenu('Logout')}>Logout</button>
        </div>
    )
}
export default NavBar;