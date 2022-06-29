import React, { useState } from "react";
import styles from "./UploadStaff.module.css";
import iconClose from "../../../images/icon-close.svg";
import iconCsv from "../../../images/icon-upload-csv.svg";
import { useDispatch } from "react-redux";
import { addMultipleStaff } from "../../../redux/staff/actions/staff.action";

const UploadStaff = ({ setOpen }: any) => {
	const dispatch = useDispatch();

	const closeModal = () => {
		setOpen(false);
	};
	const handleDrop = (e: any) => {
		dispatch(addMultipleStaff(e.target.files[0]));
	};
	return (
		<div>
			<div>
				<div className={styles.uploadStaff}>
					<div className={styles.modalHeader}>
						<div className={styles.modalTitle}>Upload Staff</div>
						<span className={styles.close}>
							<img src={iconClose} onClick={closeModal} />
						</span>
					</div>
					<div className={styles.modalBody}>
						<div className={styles.uploadContainer}>
							<input
								type="file"
								name="upload-staff"
								accept=".csv"
								onDrop={handleDrop}
								onChange={handleDrop}
							/>
						</div>
						<div className={styles.uploadStuff}>
							<img src={iconCsv} alt="icon CSV" />
							<h2>Select a CSV file to upload</h2>
							<p>Or drag and drop here</p>
							<a
								href="https://demo-files-pineapple.s3.amazonaws.com/staff-demo-1.csv"
								target="_blank"
								rel="noopener noreferrer"
							>
								Download
							</a>
						</div>
					</div>
					<div className={styles.modalFooter}>
						<div className={styles.progressContainer}>
							<div className={styles.progressPercent}>45%</div>
							<div className={styles.progressBar}>
								<span className={styles.progress}></span>
							</div>
						</div>
						<div className={styles.modalCancel}>
							<button>Cancel</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UploadStaff;
