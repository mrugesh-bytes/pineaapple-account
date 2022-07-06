import axios from 'axios';
import moment from 'moment';
import { Dispatch } from 'react';
import {
    GET_UNITS_FAILURE,
    GET_UNITS_REQUEST,
    GET_UNITS_SUCCESS,
    ADD_UNITS_FAILURE,
    ADD_UNITS_REQUEST,
    ADD_UNITS_SUCCESS,
    DELETE_UNITS_FAILURE,
    DELETE_UNITS_REQUEST,
    DELETE_UNITS_SUCCESS,
    EDIT_UNITS_FAILURE,
    EDIT_UNITS_REQUEST,
    EDIT_UNITS_SUCCESS,
} from '../constants/units.constants';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = localStorage.getItem('accessToken');

// Get Units
const getUnitsRequest = () => {
    return {
        type: GET_UNITS_REQUEST,
    };
};

const getUnitsSuccess = (unitsData: any) => {
    return {
        type: GET_UNITS_SUCCESS,
        payload: unitsData,
    };
};

const getUnitsFailure = (unitsError: any) => {
    return {
        type: GET_UNITS_FAILURE,
        payload: unitsError,
    };
};

// Add Units
const addUnitsRequest = () => {
    return {
        type: ADD_UNITS_REQUEST,
    };
};

const addUnitsSuccess = (unitsData: any) => {
    return {
        type: ADD_UNITS_SUCCESS,
        payload: unitsData,
    };
};

const addUnitsFailure = (unitsError: any) => {
    return {
        type: ADD_UNITS_FAILURE,
        payload: unitsError,
    };
};

// Edit Units
const editUnitsRequest = () => {
    return {
        type: EDIT_UNITS_REQUEST,
    };
};

const editUnitsSuccess = (unitsData: any) => {
    return {
        type: EDIT_UNITS_SUCCESS,
        payload: unitsData,
    };
};

const editUnitsFailure = (unitsError: any) => {
    return {
        type: EDIT_UNITS_FAILURE,
        payload: unitsError,
    };
};

// Delete Units
const deleteUnitsRequest = () => {
    return {
        type: DELETE_UNITS_REQUEST,
    };
};

const deleteUnitsSuccess = (unitsData: any) => {
    return {
        type: DELETE_UNITS_SUCCESS,
        payload: unitsData,
    };
};

const deleteUnitsFailure = (unitsError: any) => {
    return {
        type: DELETE_UNITS_FAILURE,
        payload: unitsError,
    };
};

// Get Units Dispatch
export const getUnits: any = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch(getUnitsRequest());
        return axios
            .get(`/account/units`)
            .then((response) => dispatch(getUnitsSuccess(response.data)))
            .catch((error) => dispatch(getUnitsFailure(error)));
    };
};

// Add Units Dispatch
export const addUnits: any = (unitDetails: any) => {
    console.log(unitDetails);
    const formData = new FormData();
    formData.append('name', unitDetails.unitName);
    formData.append('baths', unitDetails.bathSize);
    formData.append('price', unitDetails.unitPrice);
    formData.append('rooms', unitDetails.bedSize);
    formData.append('size', unitDetails.unitSize);
    formData.append('status', unitDetails.unitStatus);
    if (unitDetails.uploadFiles.length > 0) {
        unitDetails.uploadFiles.map((file: any) => formData.append('files', file));
    }
    formData.append('building', 'Test');
    formData.append('floor', '1');
    formData.append('locationId', '9fbedaf8-fe22-4c50-97f2-93256d563b4d');
    formData.append('startAt', moment().format());
    formData.append('endAt', moment().format());
    return (dispatch: Dispatch<any>) => {
        dispatch(addUnitsRequest());
        return axios
            .post(`/account/unit`, formData)
            .then((response) => {
                dispatch(getUnits());
                dispatch(addUnitsSuccess(response.data.result.unit));
            })
            .catch((error) => dispatch(addUnitsFailure(error)));
    };
};

// Edit Units Dispatch
export const editUnits: any = (unitDetails: any) => {
    console.log(unitDetails);
    const formData = new FormData();
    formData.append('name', unitDetails.unitName);
    formData.append('baths', unitDetails.bathSize);
    formData.append('price', unitDetails.unitPrice);
    formData.append('rooms', unitDetails.bedSize);
    formData.append('size', unitDetails.unitSize);
    formData.append('status', unitDetails.unitStatus);
    formData.append('imageUrl', unitDetails.imageUrl);
    formData.append('deleteImageUrls', unitDetails.deleteImageUrls);
    if (unitDetails.uploadFiles.length > 0) {
        unitDetails.uploadFiles.map((file: any) => formData.append('files', file));
    }
    formData.append('building', 'Test');
    formData.append('floor', '1');
    formData.append('locationId', '9fbedaf8-fe22-4c50-97f2-93256d563b4d');
    return (dispatch: Dispatch<any>) => {
        dispatch(editUnitsRequest());
        return axios
            .put(`/account/unit/${unitDetails.id}`, formData)
            .then((response) => {
                dispatch(getUnits());
                dispatch(editUnitsSuccess(response.data.result.unit));
            })
            .catch((error) => dispatch(editUnitsFailure(error)));
    };
};

// Delete Staff
export const deleteUnits: any = (id: string) => {
    const ACCESS_TOKEN = localStorage.getItem('accessToken');
    return async (dispatch: Dispatch<any>) => {
        dispatch(deleteUnitsRequest());
        await axios
            .delete(`${BASE_URL}/account/unit/${id}`, {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                },
            })
            .then((response) => {
                dispatch(getUnits());
                dispatch(deleteUnitsSuccess(response.data));
            })
            .catch((error) => dispatch(deleteUnitsFailure(error)));
    };
};
