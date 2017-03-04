import React, { Component } from 'react';
import validator from 'validator';
import debounce from 'lodash.debounce';

import '.././login.css';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state = { 
            email: '',
            password: '',
            emailErrorText: '',
            passwordErrorText: '',
            submitButtonDisabled: false
        };

        this.validateEmail = debounce(this.validateEmail, 500);
        this.validatePassword = debounce(this.validatePassword, 500);
        this.isFormValid = this.isFormValid.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
   }

   validateEmail(val) {
       validator.isEmail(val) ? this.setState({ emailErrorText: '', emailIsValid: true })
                              : this.setState({ emailErrorText: 'Sorry, you entered invalid email' });
       this.isFormValid();                       
   }

   validatePassword(val) {
        val.length > 5 ? this.setState({ passwordErrorText: '', passwordIsValid: true })
                       : this.setState({ passwordErrorText: 'Sorry, password must be at least 6 symbols long' });
        this.isFormValid();               
   }
  
  isFormValid() {
      this.state.emailIsValid && this.state.passwordIsValid
        ? this.setState({submitButtonDisabled: false})
        : this.setState({submitButtonDisabled: true})
  }

   handleEmailChange(event) {
       const val = event.target.value;

       this.validateEmail(val);
       this.setState({email: val});
   }

   handlePasswordChange(event) {
       const val = event.target.value;

       this.validatePassword(val);
       this.setState({password: val});
   }

   handleSubmit() {
       const email = this.state.email.trim();
       const password = this.state.password.trim();

	   const isLoggedIn = true;
       const user = { email, password, isLoggedIn };

       this.setState({submitButtonDisabled: true});
       this.setState({email: '', password: ''});

	   this.props.actions.logUser(user);
   }

   render() {
        return (
            <div >
                <div className="form-wrapper">
                    <Paper zDepth={2} className="login-form ">
                    <form>
                        <h2 className="login-form__title">Sign In</h2>
                        <TextField
                            hintText="email@example.com"
                            floatingLabelText="Your email"
                            type="email"
                            value={this.state.email}
                            className="login-form__input"
                            errorText={this.state.emailErrorText}
                            onChange={this.handleEmailChange}
                        />
                        <TextField
                            hintText="Password Field (min 6 chars)"
                            floatingLabelText="Password"
                            type="password"
                            value={this.state.password}
                            className="login-form__input"
                            errorText={this.state.passwordErrorText}
                            onChange={this.handlePasswordChange}
                        />
                        <RaisedButton
                            disabled={this.state.submitButtonDisabled}
                            label="LogIn"
                            primary={true}
                            className="login-form__btn"
                            onClick={(e) => this.handleSubmit(e)}
                        />
                        <span className="login-form__forget-link">I forgot Password</span>
                    </form>        
                    </Paper>
                </div>
            </div>
        );
    }
}

export default LoginForm;
