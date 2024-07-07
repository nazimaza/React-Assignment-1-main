import React, { useState } from 'react';

const initialState = { email: "", password: "" };

export default function Login({ setPage, setMessage }) {
    const [state, setState] = useState(initialState);
    const [error, setError] = useState("");

    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }));

    const handleLogin = () => {
        let { email, password } = state;
        if (email && password) {
            setMessage(`User logged in with email: ${email}`);
        } else if(!email && password){
            setMessage('Please fill in both email and password.');
        } 
        
    };

    return (
        <main className='auth-main'>
            <div className="auth-container">
                <h1 className='auth-title'>Login</h1>
                {error && <div className="error-message">{error}</div>}
                <input 
                    type="email" 
                    placeholder='Enter email' 
                    className='auth-input' 
                    name='email' 
                    onChange={handleChange} 
                />
                <input 
                    type="password" 
                    placeholder='Enter password' 
                    className='auth-input' 
                    name='password' 
                    onChange={handleChange} 
                />
                <button className='auth-button' onClick={handleLogin}>Login</button>
                <div className="auth-links">
                    <button className='auth-link' onClick={() => setPage('forgotPassword')}>Forgot password?</button>
                    <button className='auth-link' onClick={() => setPage('register')}>Register</button>
                </div>
            </div>
        </main>
    );
}
