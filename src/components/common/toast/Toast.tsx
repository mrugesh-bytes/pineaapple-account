import React from "react";
import styles from "./Toast.module.css";
import iconSuccess from "../../../images/icon-toast-success.svg";
import toastClose from "../../../images/icon-close.svg";
const Toast = () => {
	return (
		<div className={styles.toastContainer}>
			<div className={styles.toastSuccess}>
				<img src={iconSuccess} alt="Icon Success" />
			</div>
			<div>
				<h2 className={styles.toastTitle}>New Staff Succesfully Added!</h2>
				<p className={styles.toastInfo}>
					CSV file is added to your staff listing.
				</p>
			</div>
			<div className={styles.toastClose}>
				<img src={toastClose} alt="Close" />
			</div>
		</div>
	);
};

export default Toast;
