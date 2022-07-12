import {
    GET_AUTH_FAILURE,
    GET_AUTH_REQUEST,
    GET_AUTH_SUCCESS,
} from '../constants/auth.constant';

const initialState = {
    loading: false,
    data: [],
    error: '',
};

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_AUTH_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GET_AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: '',
            };
        case GET_AUTH_FAILURE:
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

export default authReducer;
