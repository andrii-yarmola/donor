import { combineReducers } from 'redux';
import { navReducer } from '../Navigator';

import login from './login';
import auth from './auth'

export default combineReducers({
	login,
	auth,
	nav: navReducer
});
