import {
	USER_REGISTER_FAILURE,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_SIGNIN_FAILURE,
	USER_SIGNIN_REQUEST,
	USER_SIGNIN_SUCCESS,
} from './userTypes';

const initialUserState = {
	loading: false,
	user: {},
	error: '',
};

const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case USER_REGISTER_REQUEST:
			return { ...state, loading: true };
		case USER_REGISTER_SUCCESS:
			return { loading: false, user: action.payload, error: '' };
		case USER_REGISTER_FAILURE:
			return { loading: false, user: {}, error: action.payload };
		case USER_SIGNIN_REQUEST:
			return { ...state, loading: true };
		case USER_SIGNIN_SUCCESS:
			return { loading: false, user: action.payload, error: '' };
		case USER_SIGNIN_FAILURE:
			return { loading: false, user: {}, error: action.payload };
		default:
			return state;
	}
};

export default userReducer;
