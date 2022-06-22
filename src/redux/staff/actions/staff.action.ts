import axios from "axios";
import { Dispatch } from "react";
import {
  GET_STAFF_FAILURE,
  GET_STAFF_REQUEST,
  GET_STAFF_SUCCESS,
} from "../constants/staff.constants";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = localStorage.getItem("accessToken");

const getStaffRequest = () => {
  return {
    type: GET_STAFF_REQUEST,
  };
};

const getStaffSuccess = (staffData: any) => {
  return {
    type: GET_STAFF_SUCCESS,
    payload: staffData,
  };
};

const getStaffFailure = (staffError: any) => {
  return {
    type: GET_STAFF_FAILURE,
    payload: staffError,
  };
};

export const getStaff: any = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(getStaffRequest());
    return axios
      .get(`${BASE_URL}/account/staff`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      })
      .then((response) => dispatch(getStaffSuccess(response.data)))
      .catch((error) => dispatch(getStaffFailure(error)));
  };
};
