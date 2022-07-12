import axios from 'axios';
import { Dispatch } from 'react';
import { GET_UNIT_BY_ID_FAILURE, GET_UNIT_BY_ID_REQUEST, GET_UNIT_BY_ID_SUCCESS } from '../constants/unitById.constant';

const getUnitByIdRequest = () => {
    return {
        type: GET_UNIT_BY_ID_REQUEST,
    };
};

const getUnitByIdSuccess = (unitByIdData: any) => {
    return {
        type: GET_UNIT_BY_ID_SUCCESS,
        payload: unitByIdData,
    };
};

const getUnitByIdFailure = (errorData: any) => {
    return {
        type: GET_UNIT_BY_ID_FAILURE,
        payload: errorData,
    };
};

export const getUnitById: any = (id: number) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(getUnitByIdRequest());
        axios
            .get(`/visit/unit/${id}`)
            .then((response) => dispatch(getUnitByIdSuccess(response.data)))
            .catch((err) => dispatch(getUnitByIdFailure(err)));
    };
};
