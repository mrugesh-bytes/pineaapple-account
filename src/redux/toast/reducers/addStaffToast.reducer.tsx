import { SHOW_TOAST, HIDE_TOAST } from "../constants/addStaffToast.constant";

const initialState = {
	showToast: false,
};

export const addStaffToastReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SHOW_TOAST:
			return {
				...state,
				showToast: true,
			};
		case HIDE_TOAST:
			return {
				...state,
				showToast: false,
			};
		default:
			return state;
	}
};
