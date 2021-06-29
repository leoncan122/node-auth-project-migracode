import './styles/signStyles.css'
import {useContext, useState} from 'react';

import Link from '../components/Link'
import SubmitButton from '../components/SubmitButton'

//context
import { UserContext } from '../context/UserContext'

function  SignIn () {

    const {setLoged} = useContext(UserContext)
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    
    
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.id]: e.target.value
        })
    };


    const handleSubmit =  async (e) => {
        e.preventDefault()
        
        let isInvalid = Object.values(user).some( v => !v.length)

        if (!isInvalid) {
            await fetch('http://localhost:4000/user/sign-in', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            setLoged(data.isAuthenticated)
            localStorage.setItem('token', data.jwtToken)
        })
        }
    };
    
    return (
        <div className="mainForm">
            <h1>Login</h1>
            <form className='form'>
                <input 
                    id="email"
                    type="email"
                    placeholder="E-mail"
                    value={user.email}
                    onChange={handleChange}>
                </input>
                <input 
                    id="password"
                    type="password"
                    placeholder="password"
                    value={user.password}
                    onChange={handleChange}>
                </input>
                <SubmitButton handleForm={handleSubmit}/>
            </form>
            
            <p>Don't have an account?
                <Link path='/sign-up' text=' Sign up'/>
            </p>
            
        </div>
    )
};
export default SignIn;