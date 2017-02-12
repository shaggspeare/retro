import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

const SignInButton = (props) => {
	return (
		<Link to={props.link}>
			<RaisedButton label={props.title} primary={true} className="home__btn"/>
		</Link>
	);
}

export default SignInButton;