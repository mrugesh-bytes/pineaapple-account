import { GET_SIGNUP_REQUEST, GET_SIGNUP_SUCCESS, GET_SIGNUP_FAILURE } from '../constants/signup.constant';

const initialState = {
    loading: false,
    data: [],
    error: '',
};

const signupReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GET_SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: '',
            };
        case GET_SIGNUP_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default signupReducer;
