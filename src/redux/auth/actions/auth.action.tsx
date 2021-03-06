import axios from 'axios';
import { Dispatch } from 'react';
import { GET_AUTH_FAILURE, GET_AUTH_REQUEST, GET_AUTH_SUCCESS } from '../constants/auth.constant';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const getAuthRequest = () => {
    return {
        type: GET_AUTH_REQUEST,
    };
};

const getAuthSuccess = (authData: any) => {
    return {
        type: GET_AUTH_SUCCESS,
        payload: authData,
    };
};

const getAuthFailure = (authError: any) => {
    return {
        type: GET_AUTH_FAILURE,
        payload: authError,
    };
};

export const getAuth: any = (loginDetails: any, onSuccess: any) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(getAuthRequest());
        axios
            .post(`/public/login`, loginDetails)
            .then((response) => {
                dispatch(getAuthSuccess(response.data));
                localStorage.setItem('accessToken', response.data.result.token);
                localStorage.setItem('email', loginDetails.email);
                localStorage.setItem('user', JSON.stringify(response.data.result.staff));
                onSuccess(response.data.result);
            })
            .catch((error) => dispatch(getAuthFailure(error)));
    };
};
