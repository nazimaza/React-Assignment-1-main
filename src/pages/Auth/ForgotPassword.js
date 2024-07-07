import React, { useState } from 'react';

const initialState = { email: "" };

export default function ForgotPassword({ setPage, setMessage }) {
    const [state, setState] = useState(initialState);

    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }));

    const handleForgotPassword = () => {
        let { email } = state;
        if (email) {
            setMessage(`Password reset link sent to: ${email}`);
        } else {
            setMessage('Please enter your email.');
        }
    };

    return (
        <main className='auth-main'>
            <div className="auth-container">
                <h1 className='auth-title'>Forgot Password</h1>
                <input 
                    type="email" 
                    placeholder='Enter email' 
                    className='auth-input' 
                    name='email' 
                    onChange={handleChange} 
                />
                <button className='auth-button' onClick={handleForgotPassword}>Submit</button>
                <div className="auth-links">
                    <button className='auth-link' onClick={() => setPage('login')}>Login</button>
                </div>
            </div>
        </main>
    );
}
