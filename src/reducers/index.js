import { combineReducers } from 'redux';
import user from '../features/Login/login.reducer.js';

const RootReducer = combineReducers({ user });

export default RootReducer;