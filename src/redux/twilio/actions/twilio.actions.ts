import { Message } from '@twilio/conversations';
import axios from 'axios';
import { Dispatch } from 'react';
import {
    TWILIO_TOKEN_FAILURE,
    TWILIO_TOKEN_REQUEST,
    TWILIO_TOKEN_SUCCESS,
    TWILIO_CURRENT_CONVO_SUCCESS,
    TWILIO_PARTICIPANTS_SUCCESS,
    TWILIO_CONVERSATION_MESSAGE_FETCH,
    TWILIO_CONVERSATION_MESSAGE_UPDATE,
    TWILIO_CONVERSATION_PUSH_MESSAGES,
} from '../constants/twilio.constants';

const getTwilioTokenRequest = () => {
    return {
        type: TWILIO_TOKEN_REQUEST,
    };
};

const getTwilioTokenSuccess = (token: any) => {
    return {
        type: TWILIO_TOKEN_SUCCESS,
        payload: token,
    };
};

const getTwilioTokenFailure = (twilioError: any) => {
    return {
        type: TWILIO_TOKEN_FAILURE,
        payload: twilioError,
    };
};

const updateTwilioCurrentConvoSuccess = (sid: any) => {
    return {
        type: TWILIO_CURRENT_CONVO_SUCCESS,
        payload: sid,
    };
};

const getTwilioParticipantsSuccess = (participants: any, sid: string) => {
    return {
        type: TWILIO_PARTICIPANTS_SUCCESS,
        payload: { participants, sid },
    };
};

const getTwilioMessages = (messages: any, sid: string) => {
    return {
        type: TWILIO_CONVERSATION_MESSAGE_FETCH,
        payload: { messages, sid },
    };
};

const pushNewMessage = (messages: Message[], sid: string) => {
    return {
        type: TWILIO_CONVERSATION_PUSH_MESSAGES,
        payload: { messages, sid },
    };
};

const updateTwilioMessages = (message: Message, sid: string) => {
    return {
        type: TWILIO_CONVERSATION_MESSAGE_UPDATE,
        payload: { message, sid },
    };
};

export const getToken: any = (userInfo: any) => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(getTwilioTokenRequest());
        axios
            .get(`https://dandelion-spider-9658.twil.io/token-service`, {
                params: {
                    identity: userInfo.name,
                    password: userInfo.email,
                },
            })
            .then((response) => {
                dispatch(getTwilioTokenSuccess(response.data));
            })
            .catch((error) => dispatch(getTwilioTokenFailure(error)));
    };
};

export const updateCurrentConversation: any = (sid: any) => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(updateTwilioCurrentConvoSuccess(sid));
    };
};

export const getParticipants: any = (participants: any, sid: string) => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(getTwilioParticipantsSuccess(participants, sid));
    };
};

export const getMessages: any = (messages: Message[], sid: string) => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(getTwilioMessages(messages, sid));
    };
};

export const pushMessages: any = (messages: Message[], sid: string) => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(pushNewMessage(messages, sid));
    };
};

export const updateMessages: any = (message: Message, sid: string) => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(updateTwilioMessages(message, sid));
    };
};
