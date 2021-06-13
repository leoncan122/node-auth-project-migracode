import './styles/signStyles.css'
import {useState} from 'react';
import SubmitButton from '../components/SubmitButton'

//context
import DataContext from '../DataContext'

function  SignIn (props) {

    const {loged, setLoged} = props
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [isInvalid, setIsInvalid] = useState(true)

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.id]: e.target.value
        })
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        setIsInvalid(Object.values(user).some( v => !v.length))

        if (!isInvalid) {
            fetch('http://localhost:4000/user/sign-in', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            setLoged(data.isAuthenticated)
        })
        };
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