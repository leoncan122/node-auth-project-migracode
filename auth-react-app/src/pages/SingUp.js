import './styles/signStyles.css'
import {useState} from 'react';

import Link from '../components/Link';
import SubmitButton from '../components/SubmitButton';


function  SignUp () {
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: ""
    })


    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.id]: e.target.value
        })
    };
    const handleSubmit = async (e) => {
        e.preventDefault()

        let isInvalid = Object.values(newUser).some( v => !v.length)

        if (!isInvalid) {
            await fetch('http://localhost:4000/user/sign-up',{
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newUser) 
            }
            )
            .then( res => res.json())
            .then( data => {
               alert('welcome')
               
               if (data.isAuthenticated === 'true') {

               }
            })
        }
    };
    return (
        <div className="mainForm">
            <h1>Sign up</h1>
            <form >
                <input 
                    id="name"
                    type="name"
                    placeholder="Name"
                    value={newUser.name}
                    onChange={handleChange}>
                </input>
                <input 
                    id="email"
                    type="email"
                    placeholder="E-mail"
                    value={newUser.email}
                    onChange={handleChange}>
                </input>
                <input 
                    id="password"
                    type="password"
                    placeholder="password"
                    value={newUser.password}
                    onChange={handleChange}>
                </input>
            </form>
            <SubmitButton handleForm={handleSubmit}/>
            <p>Already have an account?
                <Link path='/sign-in' text='Login'/>
            </p>
            
        </div>
    )
};
export default SignUp;