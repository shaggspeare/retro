import { SIGN_IN  } from '../../actions';

const initialState = {
	email: "John",
	password: 'Doe',
	isLoggedIn: false
};

export default function signIn(state = initialState, action) {
	switch (action.type) {
		case SIGN_IN :
			return Object.assign({}, state, {
				email: action.user.email,
				password: action.user.password,
				isLoggedIn: action.user.isLoggedIn
			});
		default:
			return state;
	}
}