import React, {Component} from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import validator from 'validator';
import debounce from 'lodash.debounce';

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

	   let isLoggedIn = true;
       let user = { email, password, isLoggedIn };

       this.setState({submitButtonDisabled: true});
       this.setState({email: '', password: ''});

	   this.props.actions.logUser(user);
   }

   render() {
        return (
            <div>
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
                            onChange={this.handleEmailChange}
                        />
                        <TextField
                            hintText="Password Field (min 6 chars)"
                            floatingLabelText="Password"
                            type="password"
                            value={this.state.password}
                            className="form-wrapper__input"
                            errorText={this.state.passwordErrorText}
                            onChange={this.handlePasswordChange}
                        />
                        <RaisedButton
                            disabled={this.state.submitButtonDisabled}
                            label="LogIn"
                            primary={true}
                            className="form-wrapper__btn"
                            onClick={(e) => this.handleSubmit(e)}
                        />
                        <span className="form-wrapper__forget-link">I forgot Password</span>
                    </form>        
                    </Paper>
                </div>
            </div>
        );
    }
}

export default LoginForm;
