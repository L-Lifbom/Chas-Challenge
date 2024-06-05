import React, { useState, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from './Auth';
import style from '../style.module.css';

function Login() {
    const { selectedCity } = useParams();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setSignedIn } = useContext(AuthContext);

    document.title = "Login";

    const back = () => {
        navigate(-1);
    }

    const loginHandler = async (e) => {
        e.preventDefault();

        const dataToSend = {
            Email: email,
            Password: password
        };


        try {
            const response = await fetch("api/UserAccount/login", {
                method: "POST",
                credentials: "include",
                body: JSON.stringify(dataToSend),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            localStorage.setItem("user", dataToSend.Email);
            navigate('/destination');
        } catch (error) {
            setError('Something went wrong, please try again');
            console.error('Login error:', error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSignedIn(true);
        navigate(-1);
    };

    return (
        <div className={style.AccAlign}>
            <button className={style.closeBtn} aria-label="Close" onClick={back}>
                &times;
            </button>
            <form onSubmit={loginHandler} className={style.AccForm}>
                <h3>Sign In</h3>
                <input className={style.accountInputs} id="email" name='email' type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input className={style.accountInputs} type="password" name='password' id='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />

                <div className={style.accountContainer}>
                    <button className={style.accountBtn} type='submit'>Submit</button>
                    <Link to="/signup">Dont have an account? Sign up here</Link>
                </div>
            </form>
        </div>

    );
}

export default Login;