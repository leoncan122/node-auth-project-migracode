import './styles/signStyles.css'
import {useState} from 'react';
import SubmitButton from '../components/SubmitButton'


function  SignIn () {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [isInvalid, setIsInvalid] = useState(null)


    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.id]: e.target.value
        })
    };
    const handleSubmit = async (e) => {
        e.preventDefault()

        setIsInvalid(Object.values(user).some( v => !v.length))

        if (isInvalid) {
            alert("Welcome!")
        }
    };
    return (
        <div className="mainForm">
            <h1>Login</h1>
            <form>
                <input 
                    id="email"
                    type="email"
                    placeholder="E-mail"
                    onChange={handleChange}>
                </input>
                <input 
                    id="password"
                    type="password"
                    placeholder="password"
                    onChange={handleChange}>
                </input>
            </form>
            <SubmitButton handleForm={handleSubmit}/>
            <p>Don't have an account? <a>Sign up</a></p>
            
        </div>
    )
};
export default SignIn;