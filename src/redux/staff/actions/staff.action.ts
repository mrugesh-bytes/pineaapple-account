import axios from "axios";
import { Dispatch } from "react";
import {
	GET_STAFF_FAILURE,
	GET_STAFF_REQUEST,
	GET_STAFF_SUCCESS,
	ADD_STAFF_FAILURE,
	ADD_STAFF_REQUEST,
	ADD_STAFF_SUCCESS,
	EDIT_STAFF_FAILURE,
	EDIT_STAFF_REQUEST,
	EDIT_STAFF_SUCCESS,
	DELETE_STAFF_FAILURE,
	DELETE_STAFF_REQUEST,
	DELETE_STAFF_SUCCESS,
} from "../constants/staff.constants";

const BASE_URL = process.env.REACT_APP_BASE_URL;

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

// Edit Staff
const editStaffRequest = () => {
	return {
		type: EDIT_STAFF_REQUEST,
	};
};

const editStaffSuccess = (staffData: any) => {
	return {
		type: EDIT_STAFF_SUCCESS,
		payload: staffData,
	};
};

const editStaffFailure = (staffError: any) => {
	return {
		type: EDIT_STAFF_FAILURE,
		payload: staffError,
	};
};

// Delete Staff
const staffDeleteRequest = () => {
	return {
		type: DELETE_STAFF_REQUEST,
	};
};

const staffDeleteSuccess = (data: any) => {
	return {
		type: DELETE_STAFF_SUCCESS,
		payload: data,
	};
};

const staffDeleteFailure = (errMsg: any) => {
	return {
		type: DELETE_STAFF_FAILURE,
	};
};

// Get Staff Dispatch
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
	const ACCESS_TOKEN = localStorage.getItem("accessToken");
	return (dispatch: Dispatch<any>) => {
		const formData = new FormData();
		formData.append("email", staffData.email);
		formData.append("name", staffData.name);
		formData.append("password", staffData.password);
		formData.append("file", staffData.photo);
		formData.append("role", staffData.role);
		formData.append("phone", "");
		dispatch(addStaffRequest());
		return axios
			.post(`${BASE_URL}/account/staff/create`, formData, {
				headers: {
					Authorization: `Bearer ${ACCESS_TOKEN}`,
				},
			})
			.then((response) => {
				dispatch(addStaffSuccess(response.data));
			})
			.catch((error) => dispatch(addStaffFailure(error)));
	};
};

// Edit Staff Dispatch
export const editStaff: any = (staffData: any) => {
	console.log(staffData);
	const ACCESS_TOKEN = localStorage.getItem("accessToken");
	return (dispatch: Dispatch<any>) => {
		const formData = new FormData();
		formData.append("id", staffData.id);
		formData.append("email", staffData.email);
		formData.append("name", staffData.name);
		if (staffData.password.trim() !== "") {
			formData.append("password", staffData.password);
		} else {
			formData.append("password", "");
		}
		formData.append("imageUrl", staffData.imageUrl);
		formData.append("deleteImageUrl", staffData.deleteImageUrl);
		if (staffData.photo !== "") {
			formData.append("file", staffData.photo);
		}
		formData.append("role", staffData.role);
		formData.append("phone", "1234567890");
		dispatch(editStaffRequest());
		return axios
			.put(`${BASE_URL}/account/staff/modify`, formData, {
				headers: {
					Authorization: `Bearer ${ACCESS_TOKEN}`,
				},
			})
			.then((response) => {
				dispatch(editStaffSuccess(response.data));
			})
			.catch((error) => dispatch(editStaffFailure(error)));
	};
};

// Delete Staff
export const deleteStaff: any = (id: string) => {
	const ACCESS_TOKEN = localStorage.getItem("accessToken");
	return async (dispatch: Dispatch<any>) => {
		dispatch(staffDeleteRequest());
		await axios
			.delete(`${BASE_URL}/account/staff/${id}`, {
				headers: {
					Authorization: `Bearer ${ACCESS_TOKEN}`,
				},
			})
			.then((response) => {
				dispatch(getStaff());
				dispatch(staffDeleteSuccess(response.data));
			})
			.catch((error) => dispatch(staffDeleteFailure(error)));
	};
};
