import axios from 'axios';
import { Dispatch } from 'react';
import { GET_SIGNUP_REQUEST, GET_SIGNUP_SUCCESS, GET_SIGNUP_FAILURE } from '../constants/signup.constant';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const getSignupRequest = () => {
    return {
        type: GET_SIGNUP_REQUEST,
    };
};

const getSignupSuccess = (signupData: any) => {
    return {
        type: GET_SIGNUP_SUCCESS,
        payload: signupData,
    };
};

const getSignupFailure = (signupError: any) => {
    return {
        type: GET_SIGNUP_FAILURE,
        payload: signupError,
    };
};

export const getRegister: any = (signupDetails: any, onSuccess: any) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(getSignupRequest());
        return axios
            .post(`${BASE_URL}/account/register`, signupDetails)
            .then((response) => {
                dispatch(getSignupSuccess(response.data.result));
                localStorage.setItem('accessToken', response.data.result.token);
                localStorage.setItem('email', signupDetails.email);
                onSuccess();
            })
            .catch((error) => dispatch(getSignupFailure(error)));
    };
};
