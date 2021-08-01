import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({}) => {

    return <div className="login-form-layout">
    <div className="container">
        <div className="left-container">
            <h3>Login</h3>
            <form action="" className="login-form">
                <label className="label-fill" for="email">Email</label>
                <input type="email" id="abc" className="fill" placeholder="you@example.com"/>
                <label className="label-fill" for="password">Password</label>
                <input type="text" className="fill" placeholder="Enter your password"/>
                <div className="tick">
                    <div className="content left-tick">
                        <input type="checkbox"/>
                        <label for="tick">Remember me</label>
                    </div>
                    <div className="content right-tick">
                        <a href="#">Forgot your password?</a>
                    </div>
                </div>
                <button type="button">
                    <p>Sign Up</p>  
                    <i className="fas fa-arrow-right"></i>
                </button>
                <p>Or</p>
                <button type="button">
                    <i className="fab fa-github"></i>
                    <p>Sign in with github</p>
                </button>
                <a href="#">Don't have account?</a>
            </form>
        </div>
        <div className="right-container">
            <img src="https://flatlogic.com/assets/auth_pages/auth-00e6f8f328500da7be80445c383ff32f3bc8d5df5417bf8a4bddb213954ec46c.svg" alt="image"/>
        </div>

    </div>
</div>
}

export default Login;