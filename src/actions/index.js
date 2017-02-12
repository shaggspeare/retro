import { hashHistory } from 'react-router';

export const SIGN_IN = 'SIGN_IN';

export const signIn = (user) =>({
	type: SIGN_IN,
	user
});


export function logUser(user) {
	return dispatch => {
		return new Promise(() => {
			setTimeout( () => {
				dispatch(signIn(user));
				hashHistory.push('/')
			}, 1000);
		})
	};
}
