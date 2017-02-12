import React, {Component} from 'react';
import SignInButton from './SignInButton';

class Home extends Component {

	renderIfLogged(){

		if (this.props.userIsLoggedIn) {
			return (
                <h2 className="home__user">You are authorized with following email : <strong>{this.props.userEmail}</strong></h2>
			);
		} else {
			return (
                <SignInButton title={"Sign in"} link={'/sign-in'} />
			);
		}
	}

    render() {
        return (
            <div className="">
                <h1 className="main-title">Home</h1>
                <div className="home">
	                { this.renderIfLogged() }
                </div>
            </div>

        );
    }
}

export default Home;