import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SignActions from '../actions';
import LoginForm from '../components/LoginForm';

const mapStateToProps = ({user}) => {
	return {
		userEmail: user.email,
		userPassword: user.password,
		userIsLoggedIn: user.isLoggedIn
	}
};

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(SignActions, dispatch)
});

console.log(SignActions);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);