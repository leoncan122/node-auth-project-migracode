import './styles/signStyles.css'
import {useState} from 'react';
import SubmitButton from '../components/SubmitButton'


function  SignUp () {
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [isInvalid, setIsInvalid] = useState(null)


    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.id]: e.target.value
        })
    };
    const handleSubmit = async (e) => {
        e.preventDefault()

        await setIsInvalid(Object.values(newUser).some( v => !v.length))

        if (!isInvalid) {
            alert("user created")
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
                    onChange={handleChange}>
                </input>
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
            <p>Already have an account? <a>Log in</a></p>
            
        </div>
    )
};
export default SignUp;