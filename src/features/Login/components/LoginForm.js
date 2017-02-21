import React, {Component} from 'react';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import validator from 'validator';
import debounce from 'lodash.debounce';

class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state = { email: '', password: '',
            emailErrorText: '', passwordErrorText: '',
            formIsValid: false, submitButtonDisabled: false
        };
        this.validateEmail = debounce(this.validateEmail, 1500);
        this.validatePassword = debounce(this.validatePassword, 1500);
    }
   validateEmail(val) {
       if (validator.isEmail(val)) {
           this.setState({ emailErrorText: '', formIsValid: true })
       } else {
           this.setState({ emailErrorText: 'Sorry, you entered invalid email' })
       }
   }

   validatePassword(val) {
        if (val.length > 5) {
            this.setState({ passwordErrorText: '', formIsValid: true })
        } else {
            this.setState({ passwordErrorText: 'Sorry, password must be at least 6 symbols long' })
        }
   }
  
   handleEmailChange(event) {
       let val = event.target.value;
       this.validateEmail(val);
       this.setState({email: val});
   }
   handlePasswordChange(event) {
       let val = event.target.value;
       this.validatePassword(val);
       this.setState({password: val});
   }

   handleSubmit() {
       let email = this.state.email.trim();
       let password = this.state.password.trim();

       let formIsValid  = this.state.formIsValid;

       if (!formIsValid) {
           return;
       }
	   let isLoggedIn = true;
       let user = {email, password, isLoggedIn};
       this.setState({submitButtonDisabled: true});
       this.setState({email: '', password: ''});
	   this.props.actions.logUser(user);

   }

   render() {
        return (
            <div>
                <AppBar title="JS Mentoring"/>
                <h1 className="main-title">Retro App</h1>
                <div className="login-form">
                    <Paper zDepth={2} className="form-wrapper">
                    <form>
                        <h2 className="form-wrapper__title">Welcome</h2>
                        <TextField
                            hintText="email@example.com"
                            floatingLabelText="Your email"
                            type="email"
                            value={this.state.email}
                            className="form-wrapper__input"
                            errorText={this.state.emailErrorText}
                            onChange={this.handleEmailChange.bind(this)}
                        />
                        <TextField
                            hintText="Password Field (min 6 chars)"
                            floatingLabelText="Password"
                            type="password"
                            value={this.state.password}
                            className="form-wrapper__input"
                            errorText={this.state.passwordErrorText}
                            onChange={this.handlePasswordChange.bind(this)}
                        />
                        <RaisedButton
                            disabled={this.state.submitButtonDisabled}
                            label="LogIn"
                            primary={true}
                            className="form-wrapper__btn"
                            onClick={(e) => this.handleSubmit(e)}
                        />
                        <Link to={'/forgot-password'}>
                            <span className="form-wrapper__forget-link">I forgot Password</span>
                        </Link>
                    </form>        
                    </Paper>
                </div>
            </div>
        );
    }
}

export default LoginForm;

