import React from "react";
import styles from "./AddLocation.module.css";
import iconClose from "../../../images/icon-close.svg";

const AddLocation = ({ setOpen }: any) => {
	const closeModal = () => {
		setOpen(false);
	};
	return (
		<div className={styles.modalAddStaff}>
			<div className={styles.modalHeader}>
				<div className={styles.modalTitle}>Add Unit</div>
				<span className={styles.close}>
					<img src={iconClose} onClick={closeModal} />
				</span>
			</div>
			<div className={styles.modalBody}></div>
		</div>
	);
};

export default AddLocation;
