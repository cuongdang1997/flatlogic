import React from 'react';
export default class LoginPanel extends React.Component {
  render() {
    return (<div class="container">
      <div class="left-container">
        <h3>Login</h3>
        <form action="" class="login-form">
            <label class="label-fill" for="email">Email</label>
            <input type="email" id="abc" class="fill" placeholder="you@example.com" />
            <label class="label-fill" for="password">Password</label>
            <input type="text" class="fill" placeholder="Enter your password" />
            <div class="tick">
                <div class="content left-tick">
                    <input type="checkbox"/>
                    <label for="tick">Remember me</label>
                </div>
                <div class="content right-tick">
                    <a href="#">Forgot your password?</a>
                </div>
            </div>
            <button type="button">
                <p>Sign Up</p>  
                <i class="fas fa-arrow-right"></i>
            </button>
            <p>Or</p>
            <button type="button">
                <i class="fab fa-github"></i>
                <p>Sign in with github</p>
            </button>
            <a href="#">Don't have account?</a>
        </form>
    </div>
    <div class="right-container">
        <img src="https://flatlogic.com/assets/auth_pages/auth-00e6f8f328500da7be80445c383ff32f3bc8d5df5417bf8a4bddb213954ec46c.svg" alt="image" />
    </div>

</div>)
  }
}
