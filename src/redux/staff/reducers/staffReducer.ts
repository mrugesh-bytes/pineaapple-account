import { GET_STAFF_FAILURE, GET_STAFF_REQUEST, GET_STAFF_SUCCESS } from '../constants/staff.constants';

const initialState = {
    loading: false,
    data: [],
    error: '',
};

const staffReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_STAFF_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GET_STAFF_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: '',
            };
        case GET_STAFF_FAILURE:
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

export default staffReducer;
