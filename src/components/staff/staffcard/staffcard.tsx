import React from "react";
import styles from "./StaffCard.module.css";
import avatarStaff from "../../../images/staff-avatar.svg";
import iconEdit from "../../../images/icon-edit.svg";
import iconDelete from "../../../images/icon-delete.svg";
const staffcard = () => {
	return (
		<div className={styles.staffCard}>
			<div className={styles.staffPhotoContainer}>
				<img src={avatarStaff} alt="Staff Avatar" />
				<p className={`${styles.staffPos} ${styles.staffLeasing}`}>Admin</p>
			</div>
			<h2 className={styles.staffName}>Account Employee</h2>
			<a href="mailto:employee@acme.apartments" className={styles.staffMail}>
				employee@acme.apartments
			</a>
			<img className={styles.iconEdit} src={iconEdit} alt="icon Edit" />
			<img className={styles.iconDelete} src={iconDelete} alt="icon Delete" />
		</div>
	);
};

export default staffcard;
