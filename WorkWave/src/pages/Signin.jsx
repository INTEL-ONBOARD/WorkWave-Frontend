import React from 'react';
import './SignIn.css'; 

const SignIn = () => {
    return (
        <div className="signin-container">
            <h1>Sign In</h1>
            <form className="signin-form">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" className="signin-button">Sign In</button>
            </form>
        </div>
    );
}

export default SignIn;
