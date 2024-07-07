import React, { useState } from 'react';

const initialState = { fullName: "", email: "", password: "" };

export default function Register({ setPage, setMessage }) {
    const [state, setState] = useState(initialState);
    const [error, setError] = useState("");

    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }));

    const handleRegister = () => {
        let { fullName, email, password } = state;
        if (fullName && email && password) {
            setMessage(`User registered with email: ${email}. You can now log in.`);
            setError("");
            setPage('login');
        } else {
            setError("Please fill in all fields.");
            setMessage("");
        }
    };

    return (
        <main className='auth-main'>
            <div className="auth-container">
                <h1 className='auth-title'>Register</h1>
                {error && <div className="error-message">{error}</div>}
                <input 
                    type="text" 
                    placeholder='Enter full name' 
                    className='auth-input' 
                    name='fullName' 
                    onChange={handleChange} 
                />
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
                <button className='auth-button' onClick={handleRegister}>Register</button>
                <div className="auth-links">
                    <button className='auth-link' onClick={() => setPage('login')}>Login</button>
                </div>
            </div>
        </main>
    );
}
