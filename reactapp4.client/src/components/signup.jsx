import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from '../style.module.css';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Using useNavigate instead of useHistory

    document.title = "Signup";

    const back = () => {
        navigate(-1);
    }

    const signupHandler = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        const dataToSend = {
            Name: '',
            Email: email,
            UserName: email,
            PasswordHash: password,
            confirmPassword: password
        };

        try {
            const response = await fetch("api/UserAccount/register", {
                method: "POST",
                credentials: "include",
                body: JSON.stringify(dataToSend),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error('Signup failed');
            }

            navigate('/login'); // Redirect to login page after successful signup using navigate
        } catch (error) {
            setError('Something went wrong, please try again');
            console.error('Signup error:', error);
        }
    };

    return (
        <div className={style.AccAlign}>
            <form className={style.AccForm} onSubmit={signupHandler}>
                <button className={style.closeBtn} aria-label="Close" onClick={back}>
                    &times;
                </button>
                <h3>Sign Up</h3>


                <input
                    className={style.accountInputs}
                    type='text'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className={style.accountInputs}
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    className={style.accountInputs}
                    type="password"
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className={style.accountContainer}>
                    <button className={style.accountBtn} type='submit'>Register</button>
                    <Link to="/login">Already have an account?</Link>
                </div>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}

export default Signup;