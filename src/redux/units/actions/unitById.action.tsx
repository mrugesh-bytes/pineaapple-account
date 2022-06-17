import axios from 'axios';
import { Dispatch } from 'react';
import { GET_UNIT_BY_ID_FAILURE, GET_UNIT_BY_ID_REQUEST, GET_UNIT_BY_ID_SUCCESS } from '../constants/unitById.constant';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = process.env.REACT_APP_AUTH_TOKEN;

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
      .get(`${BASE_URL}/visit/unit/${id}`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      })
      .then((response) => dispatch(getUnitByIdSuccess(response.data)))
      .catch((err) => dispatch(getUnitByIdFailure(err)));
  };
};
