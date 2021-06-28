//styles
import './styles/homeStyles.css';

import React, { useState, useContext, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Menu from '../components/Menu'

import {MenuContext} from '../context/UserContext'


function Home  ()  {
    const {menuActive} = useContext(MenuContext)
    const token = localStorage.getItem('token')

    useEffect( () => {

        fetch('http://localhost:4000/user/name',{
            method: 'get',
            headers: {
                'Authorization': `bearer ${JSON.parse(token)}`
            }
        })
        .then(res => res.json())
        .then( data => {
            localStorage.setItem('userProfile', JSON.stringify(data.user))
        })        
        console.log('dentro')
    }, [])
    
    const user =  JSON.parse(localStorage.getItem('userProfile'))
    
    return (
        <div className='main'>
            <div className='home'>
                <NavBar />
                <h1>{user && `${user.name}'s`} home</h1>
            </div>
            { !menuActive ?
            <div className='hiden' > </div> :
            <div className='active'>
                <Menu />   
            </div>}
        </div>
    )
};
export default Home;
