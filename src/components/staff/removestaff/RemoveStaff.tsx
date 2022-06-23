import React, { useState } from "react";
import iconClose from "../../../images/icon-close.svg";
import styles from "./RemoveStaff.module.css";
const RemoveStaff = ({ setDeletePopup }: any) => {
	const closeModal = () => {
		setDeletePopup(false);
	};
	return (
		<div>
			<div>
				<div className={styles.modalRemoveStaff}>
					<div className={styles.modalHeader}>
						<div className={styles.modalTitle}>Delete Staff</div>
						<span className={styles.close}>
							<img src={iconClose} onClick={closeModal} />
						</span>
					</div>
					<div className={styles.modalBody}>
						<h2 className={styles.modalBodyTitle}>
							Are you sure want to delete?
						</h2>
						<p className={styles.modalBodyInfo}>
							Once you delete the account, you will not be able to recover the
							account again!
						</p>
					</div>
					<div className={styles.modalFooter}>
						<button
							onClick={closeModal}
							className={`${styles.Modalbtn} ${styles.cancelBtn}`}
						>
							Cancel
						</button>
						<button className={`${styles.Modalbtn} ${styles.deleteBtn}`}>
							Delete Account
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RemoveStaff;
