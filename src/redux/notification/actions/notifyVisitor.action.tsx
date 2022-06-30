import axios from 'axios';
import { Dispatch } from 'react';
import { NOTIFY_VISITOR_FAILURE, NOTIFY_VISITOR_REQUEST, NOTIFY_VISITOR_SUCCESS } from '../constants/notifyVisitor.constant';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = localStorage.getItem('accessToken');

const notifyVisitorRequest = () => {
    return {
        type: NOTIFY_VISITOR_REQUEST,
    };
};

const notifyVisitorSuccess = (notifiedData: any) => {
    return {
        type: NOTIFY_VISITOR_SUCCESS,
        payload: notifiedData,
    };
};

const notifyVisitorFailure = (notifiedError: any) => {
    return {
        type: NOTIFY_VISITOR_FAILURE,
        payload: notifiedError,
    };
};

export const notifyVisitor: any = (message_id: string, visitor_id: string) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(notifyVisitorRequest());
        axios
            .post(
                `${BASE_URL}/notify/visitor`,
                { message_id, visitor_id },
                {
                    headers: {
                        Authorization: `Bearer ${ACCESS_TOKEN}`,
                    },
                },
            )
            .then((response) => dispatch(notifyVisitorSuccess(response.data)))
            .catch((errorMsg) => dispatch(notifyVisitorFailure(errorMsg.response)));
    };
};
