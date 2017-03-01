import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

const SignInButton = ({ link, title }) => {
	return (
		<Link to={link}>
			<RaisedButton label={title} primary={true} className="home__btn"/>
		</Link>
	);
}

export default SignInButton;