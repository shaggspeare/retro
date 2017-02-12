import React, {Component} from 'react';
import SignInButton from './SignInButton';

class ForgotPassword extends Component {

    render() {
        return (
            <div className="forgot-pass">
                <h2 className="main-title main-title--pass">
                    Hey, it seems like you forgot the password, ha
                </h2>
                <SignInButton  title={"Back to Sign in"} link={'/sign-in'} />
            </div>


        );
    }
}

export default ForgotPassword;
