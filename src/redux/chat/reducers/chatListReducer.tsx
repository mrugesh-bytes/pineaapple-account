import { GET_CHATLIST_FAILURE, GET_CHATLIST_REQUEST, GET_CHATLIST_SUCCESS } from '../constants/chatList.constant';

const initialState = {
    loading: false,
    data: [],
    error: '',
};

const chatListReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_CHATLIST_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GET_CHATLIST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: '',
            };
        case GET_CHATLIST_FAILURE:
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

export default chatListReducer;
