import { GET_UNIT_BY_ID_FAILURE, GET_UNIT_BY_ID_REQUEST, GET_UNIT_BY_ID_SUCCESS } from '../constants/unitById.constant';

const initialState = {
    loading: false,
    data: [],
    error: '',
};

const unitByIdReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_UNIT_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_UNIT_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: '',
            };
        case GET_UNIT_BY_ID_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default unitByIdReducer;
