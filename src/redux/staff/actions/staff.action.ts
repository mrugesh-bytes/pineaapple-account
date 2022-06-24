import axios from "axios";
import { Dispatch } from "react";
import {
	GET_STAFF_FAILURE,
	GET_STAFF_REQUEST,
	GET_STAFF_SUCCESS,
	ADD_STAFF_FAILURE,
	ADD_STAFF_REQUEST,
	ADD_STAFF_SUCCESS,
} from "../constants/staff.constants";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = localStorage.getItem("accessToken");

// Get Staff
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

// Add Staff
const addStaffRequest = () => {
	return {
		type: ADD_STAFF_REQUEST,
	};
};

const addStaffSuccess = (staffData: any) => {
	return {
		type: ADD_STAFF_SUCCESS,
		payload: staffData,
	};
};

const addStaffFailure = (staffError: any) => {
	return {
		type: ADD_STAFF_FAILURE,
		payload: staffError,
	};
};

// H Staff Dispatch
export const getStaff: any = () => {
	const ACCESS_TOKEN = localStorage.getItem("accessToken");
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

// Add Staff Dispatch
export const addStaff: any = (staffData: any) => {
	return (dispatch: Dispatch<any>) => {
		const formData = new FormData()
		formData.append("email", staffData.email)
		formData.append("name", staffData.name)
		formData.append("password", staffData.password)
		formData.append("file", staffData.photo)
		formData.append("role", staffData.role)
		formData.append("phone", "1234567890")
		dispatch(addStaffRequest());
		return axios
			.post(`${BASE_URL}/account/staff/create`, formData, {
				headers: {
					Authorization: `Bearer ${ACCESS_TOKEN}`,
				},
			})
			.then((response) => {
				dispatch(addStaffSuccess(response.data))
			})
			.catch((error) => dispatch(addStaffFailure(error)));
	};
};
