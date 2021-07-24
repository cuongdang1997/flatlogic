import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { withRouter } from 'react-router';
import loginStyles from './login.scss';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        localStorage.setItem("loggedIn", true);
        this.props.router.push('/app');
    }

    render() {
        return <div className={loginStyles.loginPage}>
            <div className={loginStyles.loginContainer}>
                <form className={loginStyles.loginForm} onSubmit={this.handleSubmit}>
                    <TextField
                        hintText="Username"
                        floatingLabelText="Username"
                        type="text"
                        />
                    <TextField
                        hintText="Password Field"
                        floatingLabelText="Password"
                        type="password"
                        />
                    <FlatButton label="Login" type="submit"></FlatButton>
                </form>
            </div>
        </div>
    }
};

export default withRouter(Login);

// Login.propTypes = {
//     router: React.PropTypes.shape({
//         push: React.PropTypes.func.isRequired
//     }).isRequired
// };