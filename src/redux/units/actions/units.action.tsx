import axios from "axios";
import { Dispatch } from "react";
import {
	GET_UNITS_FAILURE,
	GET_UNITS_REQUEST,
	GET_UNITS_SUCCESS,
} from "../constants/units.constants";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = localStorage.getItem("accessToken");

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
			.get(`/account/units`)
			.then((response) => dispatch(getUnitsSuccess(response.data)))
			.catch((error) => dispatch(getUnitsFailure(error)));
	};
};
