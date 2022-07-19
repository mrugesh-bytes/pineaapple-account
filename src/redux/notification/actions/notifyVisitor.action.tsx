import axios from 'axios';
import { Dispatch } from 'react';
import { NOTIFY_VISITOR_FAILURE, NOTIFY_VISITOR_REQUEST, NOTIFY_VISITOR_SUCCESS } from '../constants/notifyVisitor.constant';

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
            .post(`/notify/visitor`, { message_id, visitor_id })
            .then((response) => dispatch(notifyVisitorSuccess(response.data)))
            .catch((errorMsg) => dispatch(notifyVisitorFailure(errorMsg.response)));
    };
};
