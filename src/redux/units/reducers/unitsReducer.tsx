import {
    GET_UNITS_FAILURE,
    GET_UNITS_REQUEST,
    GET_UNITS_SUCCESS,
    ADD_UNITS_FAILURE,
    ADD_UNITS_REQUEST,
    ADD_UNITS_SUCCESS,
} from '../constants/units.constants';

const initialState = {
    loading: false,
    data: [],
    error: '',
};

const unitsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        // Get Units Actions
        case GET_UNITS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GET_UNITS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: '',
            };
        case GET_UNITS_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload,
            };

        // Add Units Actions
        case ADD_UNITS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case ADD_UNITS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: '',
            };
        case ADD_UNITS_FAILURE:
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

export default unitsReducer;
