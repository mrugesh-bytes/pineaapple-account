import {
    TWILIO_CONVERSATION_MESSAGE_FETCH,
    TWILIO_CONVERSATION_MESSAGE_UPDATE,
    TWILIO_CURRENT_CONVO_SUCCESS,
    TWILIO_PARTICIPANTS_SUCCESS,
    TWILIO_TOKEN_FAILURE,
    TWILIO_TOKEN_REQUEST,
    TWILIO_TOKEN_SUCCESS,
} from '../constants/twilio.constants';

const initialState: any = {
    twilioLoading: false,
    twilioToken: '',
    twilioError: '',
    convosLoading: false,
    convos: [],
    participants: [],
    sid: '',
    messages: {},
};

const twilioReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case TWILIO_TOKEN_REQUEST:
            return {
                ...state,
                twilioLoading: true,
            };
        case TWILIO_TOKEN_SUCCESS:
            return {
                ...state,
                twilioLoading: false,
                twilioToken: action.payload,
                twilioError: '',
            };
        case TWILIO_TOKEN_FAILURE:
            return {
                ...state,
                twilioLoading: false,
                twilioToken: '',
                twilioError: action.payload,
            };
        case TWILIO_CURRENT_CONVO_SUCCESS:
            return {
                ...state,
                sid: action.payload,
            };
        case TWILIO_PARTICIPANTS_SUCCESS:
            return {
                ...state,
                participants: Object.assign({}, state.participants, { [action.payload.sid]: action.payload.participants }),
            };
        case TWILIO_CONVERSATION_MESSAGE_FETCH:
            return {
                ...state,
                messages: Object.assign({}, state.messages, { [action.payload.sid]: action.payload.messages }),
            };
        case TWILIO_CONVERSATION_MESSAGE_UPDATE: {
            const sid = state.sid;
            const allMessages = state.messages
            const messages = state.messages[sid];
            const newMessages = [...messages, action.payload.message];
            return Object.assign({}, state, { messages: {...allMessages, [sid]: newMessages } });
        }
        default:
            return state;
    }
};

export default twilioReducer;
