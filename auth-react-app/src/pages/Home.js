//styles
import './styles/homeStyles.css';

import React, { useContext, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Menu from '../components/Menu'
import MainContent from '../components/MainContent';

import {MenuContext} from '../context/UserContext'


function Home  ()  {
    
    const {menuActive} = useContext(MenuContext)
    
    let token = localStorage.getItem("token")
    
    useEffect( () => {
        
        fetch('http://localhost:4000/user/name',{
            method: 'get',
            headers: {
                'Authorization': `bearer ${token}`
            }
        })
        .then(res => res.json())
        .then( data => {
            console.log(data)
            if (data.user){
                localStorage.setItem('userProfile', JSON.stringify(data.user))
            }
        })        
        
    }, [token])
    
    
    const profile =  localStorage.getItem('userProfile')

    let user;
    try {
       user = JSON.parse(profile) 
    } catch (err){
        console.log(err.message)
    }
    
    
    return (
        <div className='main'>
            <div className='home'>
                <NavBar />
                <h1>{user && `${user.name}'s`} home</h1>
                <MainContent />
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
