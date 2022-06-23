import React, { useState } from "react";
import styles from "./AddStaff.module.css";
import iconClose from "../../../images/icon-close.svg";
import staffDefaultAvatar from "../../../images/add-staff-avatar.png";
import uploadAvatar from "../../../images/upload-avatar.svg";
import Select from "react-select";

const options = [
	{ value: "AdminRole", label: "Admin" },
	{ value: "GenralManagerRole", label: "General Manager" },
	{ value: "PropertyManagerRole", label: "Property Manager" },
	{ value: "LeasingAgentRole", label: "Leasing Agent" },
	{ value: "MaintenanceRole", label: "Maintenance" },
];

const colourStyles = {
	option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
		return {
			...styles,
			backgroundColor: isFocused ? "#E59236" : isSelected ? "#E59236" : null,
			color: isFocused ? "#fff " : isSelected ? "#fff !important" : null,
			cursor: "pointer",
		};
	},
};

const AddStaff = ({ staffData, setOpen }: any) => {
	const [selectedOption, setSelectedOption] = useState({
		value: "AdminRole",
		label: "Admin",
	});

	const closeModal = () => {
		setOpen(false);
	};

	const handleChange = (event: any) => {
		setSelectedOption(event);
	};

	return (
		<div>
			<div className={styles.modalAddStaff}>
				<div className={styles.modalHeader}>
					<div className={styles.modalTitle}>
						{staffData ? `Edit Staff` : `Add Staff`}
					</div>
					<span className={styles.close}>
						<img src={iconClose} onClick={closeModal} />
					</span>
				</div>
				<div className={styles.modalBody}>
					<div className={styles.staffPhoto}>
						<img
							className={styles.staffAvatar}
							src={staffData ? staffData.imageUrl : staffDefaultAvatar}
							alt="Add Staff"
						/>
						<img
							className={styles.uploadAvatar}
							src={uploadAvatar}
							alt="Upload Avatar"
						></img>
						<input type="file" name="upload-avatar" />
					</div>
					<div className={styles.formStaff}>
						<div className={styles.field}>
							<label>Name</label>
							<input
								type="text"
								placeholder="Enter your name"
								defaultValue={staffData ? staffData.name : ""}
							></input>
						</div>
						<div className={`${styles.field} ${styles.select}`}>
							<label>Select a Role</label>
							<Select
								defaultValue={selectedOption}
								onChange={handleChange}
								options={options}
								styles={colourStyles}
							/>
						</div>
						<div className={styles.field}>
							<label>Email Id</label>
							<input
								type="email"
								defaultValue={staffData ? staffData.email : ""}
							/>
						</div>
						<div className={styles.field}>
							<label>Password</label>
							<input type="password" />
						</div>
					</div>
					<div className={styles.modalFooter}>
						<button className={styles.sendBtn}>
							{staffData ? `Edit Staff` : `Add Staff`}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddStaff;
