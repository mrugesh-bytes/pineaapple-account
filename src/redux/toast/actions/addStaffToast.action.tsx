import { SHOW_TOAST, HIDE_TOAST } from "../constants/addStaffToast.constant";

export const showStaffToast = () => {
	return {
		type: SHOW_TOAST,
	};
};

export const hideStaffToast = () => {
	return {
		type: HIDE_TOAST,
	};
};
