import { Conversation } from '@twilio/conversations';
import axios from 'axios';
import { Dispatch } from 'react';
import { GET_CHATLIST_FAILURE, GET_CHATLIST_REQUEST, GET_CHATLIST_SUCCESS } from '../constants/chatList.constant';

const getChatListRequest = () => {
    return {
        type: GET_CHATLIST_REQUEST,
    };
};

const getChatListSuccess = (chatListData: any) => {
    return {
        type: GET_CHATLIST_SUCCESS,
        payload: chatListData,
    };
};

const getChatListFailure = (chatListError: any) => {
    return {
        type: GET_CHATLIST_FAILURE,
        payload: chatListError,
    };
};

export const getChatList: any = (convos: Conversation[]) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(getChatListRequest());
        return dispatch(getChatListSuccess(convos));
    };
};
