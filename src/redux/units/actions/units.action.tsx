import axios from 'axios';
import { Dispatch } from 'react';
import { GET_UNITS_FAILURE, GET_UNITS_REQUEST, GET_UNITS_SUCCESS } from '../constants/units.constants';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = process.env.REACT_APP_AUTH_TOKEN;

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

export const getUnits: any = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(getUnitsRequest());
    return axios
      .get(`${BASE_URL}/account/units`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      })
      .then((response) => dispatch(getUnitsSuccess(response.data)))
      .catch((error) => dispatch(getUnitsFailure(error)));
  };
};
